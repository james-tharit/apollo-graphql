const words: string[] =[ 
  "abatis",
"abattoir",
"abaxial",
"ava",
"groupballadeer",
"carswell",
"deva",
"devaluate",
"devaluation",
"falito",
"falk",
"falkirk",
];

export const randomNumber = (max: number) => Math.floor(Math.random() * (max + 1));

export const getWord = () => {
  const num = randomNumber(words.length)
  return words[num] 
} 

