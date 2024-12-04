console.log("Hello World!");

const choices = {
  a: "rock",
  b: "paper",
  c: "scissors",
};

function getComputerChoice(obj) {
  const keys = Object.keys(obj);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  return obj[randomKey];
}

const computerChoice = getComputerChoice(choices);
console.log(computerChoice);

function getHumanChoice() {}
