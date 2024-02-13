import { randomNumber } from "./random";

jest.mock("./random", () => ({
  ...jest.requireActual("./random"),
  randomNumber: jest.fn().mockReturnValue(0),
}));

describe("random", () => {
  it("returns random number", () => {
    expect(randomNumber(10)).toBe(0);
  });
});
