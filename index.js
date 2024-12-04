console.log("Hello World!");

const choices = {
  a: "rock",
  b: "paper",
  c: "scissors",
};

const humanScore = 0;
const computerScore = 0;

function getComputerChoice(obj) {
  const keys = Object.keys(obj);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  return obj[randomKey];
}

const computerChoice = getComputerChoice(choices);
console.log(computerChoice);

function getHumanChoice() {
  let input = prompt("Please enter rock, paper, or scissors");
  input = input.toLowerCase();
  console.log(input);
}

const humanChoice = getHumanChoice();
console.log(humanChoice);

function playRound(humanChoice, computerChoice) {}
