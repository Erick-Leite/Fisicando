import {checkAnswer, restartQuiz, show_hide} from './functions.js';

const alternatives_answers = ["c1", "a2", "b3", "d4", "e5", "c6", "b7", "e8", "a9", "d10"]

let score = 0;

const all_hits = document.getElementById("all_hits");
const questions = document.querySelectorAll(".questions");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const explanation_button = [...document.querySelectorAll(".explanation_button")];
const input_of_alternatives = document.querySelectorAll("input[type=radio]");
const alternative = document.querySelectorAll(".alternative");
const option_of_alternative = document.querySelectorAll(".option label");
const answers = [...document.getElementsByClassName("answers")];

explanation_button.forEach((button, index) => {
  button.addEventListener("click", () => show_hide(index, answers, explanation_button))
});


restart.addEventListener("click", () => {restartQuiz(input_of_alternatives, option_of_alternative, alternative, score, result, restart, all_hits, explanation_button, answers)});


all_hits.addEventListener("click", () => {checkAnswer(input_of_alternatives, option_of_alternative, alternative, alternatives_answers, result, questions, score, all_hits, restart, explanation_button)});
