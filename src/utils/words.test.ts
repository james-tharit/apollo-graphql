import { getWord, randomNumber } from "./words";

jest.mock("./words", () => ({
  ...jest.requireActual("./words"),
  randomNumber: jest.fn().mockReturnValue(0),
  getWord: jest.fn().mockReturnValue("abatis"),
}));

describe("words", () => {

  it("returns number", () => {
    expect(randomNumber(10)).toBe(0);
  });

  it("returns word", () => {
    expect(getWord()).toBe("abatis");
  });
});
