function checkAnswer(input_of_alternatives, alternative, alternatives_answers, result, questions, score, all_hits, restart, explanation_button){

input_of_alternatives.forEach((valorAtual, index) => {
  let alternative_input = input_of_alternatives[index];
    
   if(alternative_input.checked){
     let userAnswer = alternative_input.value;
      
     let correctAnswer = alternatives_answers[Math.floor(index / 5)];
      
      
    if(userAnswer === correctAnswer){       
       score++;
        alternative[index].classList.add("correct_answers");
     }else {
alternative[index].classList.add("incorrect_answers");  
      }      
    }
    
    input_of_alternatives[index].disabled = true;
    
 })
     
    
 result.innerHTML = `Você acertou ${score} de ${questions.length} questões`;

 
 all_hits.classList.add("hidden");
 result.classList.remove("hidden");
 restart.classList.remove("hidden");

 input_of_alternatives.forEach((button, index) => {let alternative_button = input_of_alternatives[index];
     if(alternative_button.checked){
        let marked_button = Math.floor(index / 5);
        explanation_button[marked_button].classList.remove("hidden");
        
    }
 })

}


function restartQuiz(input_of_alternatives, alternative, score, result, restart, all_hits, explanation_button, answers){
  
  input_of_alternatives.forEach((alt_in, index) => {

  input_of_alternatives[index].checked = false;  
  input_of_alternatives[index].disabled = false;
  
input_of_alternatives[index].classList.remove("correct_answers", "incorrect_answers");

alternative[index].classList.remove("correct_answers", "incorrect_answers");
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
