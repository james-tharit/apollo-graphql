const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(10)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Chanel B",
    author: () => ({ name: "James T", photo: "james-t.png" }),
    length: () => 5555,
    modulesCount: () => 2,
  }),
};

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });
  const { url } = await startStandaloneServer(server);
  console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
}

startApolloServer();
