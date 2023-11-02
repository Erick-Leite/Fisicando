function checkAnswer(alternatives, alternatives_answers, result, questions, score, all_hits, restart, explanation_button){

alternatives.forEach((valorAtual, index) => {let alternative = alternatives[index];
    
    if(alternative.checked){
      let userAnswer = alternative.value;
      
      let correctAnswer = alternatives_answers[Math.floor(index / 5)];
      
      
    if(userAnswer === correctAnswer){       
       score++;
        alternatives[index].classList.add("correct_answers");
      }else {
alternatives[index].classList.add("incorrect_answers");  
      }      
    }  
 })
  
    
 result.innerHTML = `Você acertou ${score} de ${questions.length} questões`;

 
 all_hits.classList.add("hidden");
 result.classList.remove("hidden");
 restart.classList.remove("hidden");

 alternatives.forEach((button, index) => {let alternative_button = alternatives[index];
     if(alternative_button.checked){
        let marked_button = Math.floor(index / 5);
        explanation_button[marked_button].classList.remove("hidden");
        
    }
 })

}


function restartQuiz(alternatives, score, result, restart, all_hits, explanation_button, answers){
  
  alternatives.forEach((alternative, index) => {

  alternatives[index].checked = "";  
  
alternatives[index].classList.remove("correct_answers", "incorrect_answers");
})
  
  score = 0;
  result.classList.add("hidden");
  restart.classList.add("hidden");
  all_hits.classList.remove("hidden");
  
  explanation_button.forEach((button, index) => {
    if(explanation_button[index].textContent === "Ocultar explicação"){

explanation_button[index].textContent = `Mostrar explicação`;

answers[index].classList.add("hidden");

    } 
    explanation_button[index].classList.add("hidden");
  })
  
  answers.forEach((answer, index) => {
 answers[index].classList.remove("show");
});
  
}


function show_hide(index, answers, explanation_button){

answers[index].classList.toggle("hidden");
answers[index].classList.toggle("show");

let buttonText = explanation_button[index].textContent;

explanation_button[index].textContent = buttonText === "Mostrar explicação" ?
   "Ocultar explicação":
   "Mostrar explicação";
      
}


export {checkAnswer, restartQuiz, show_hide};
