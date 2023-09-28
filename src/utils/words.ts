import data from "../data/words.json" assert { type: "json" };
const words: string[] = data.words;

export const randomNumber = (max: number): number =>
  Math.floor(Math.random() * (max + 1));

export const getWord = () => {
  const num = randomNumber(words.length);
  return words[num];
};
