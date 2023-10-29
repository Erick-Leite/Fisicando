const alternative_answers = ["c1", "a2", "b3", "d4", "c5", "c6", "b7", "e8", "a9", "b10"]

let score = 0;

const submit = document.getElementById("submit");
const questions = document.querySelectorAll(".questions");
const resultado = document.getElementById("result");
const restart = document.getElementById("restart");
const display_button = [...document.querySelectorAll(".display_button")];
var radios = document.querySelectorAll("input[type=radio]");
const answers = [...document.getElementsByClassName("answers")];


function checkAnswer(){
  
  for(let i=0; i<radios.length; i++){
    let radio = radios[i];
    
    if(radio.checked){
      let userAnswer = radio.value;
      
      let correctAnswer = alternative_answers[Math.floor(i / 5)];
      
      
      if(userAnswer === correctAnswer){       
        score++;
        radios[i].classList.add("correct_answers")    
      }else {
radios[i].classList.add("incorrect_answers");  
      }
      
    }  
      
  }
    
 resultado.innerHTML = `Você acertou ${score} de ${questions.length} questions`

 
 submit.classList.add("hidden");
 resultado.classList.remove("hidden");
 restart.classList.remove("hidden");

 for(let i=0; i<radios.length; i++){
     let radio = radios[i];
     if(radio.checked){
        let index = Math.floor(i / 5);
        display_button[index].classList.remove("hidden")
        
     }
         
 }

}


function restartQuiz(){
  
  for(let i=0; i<radios.length; i++){
    radios[i].checked = "";
    radios[i].classList.remove("correct_answers", "incorrect_answers");
    
  }
  
  score = 0;
  resultado.classList.add("hidden");
  restart.classList.add("hidden");
  submit.classList.remove("hidden");
  
  for(let i=0; i<display_button.length; i++){
    
    if(display_button[i].textContent === "Ocultar explicação"){

display_button[i].textContent = `Mostrar explicação`;

answers[i].classList.add("hidden")

    }
 
    display_button[i].classList.add("hidden")
    
        
  }

for(let i=0; i<answers.length; i++){
    answers[i].classList.remove("show");
    
}

  
  
}


function show_hide(index){
  answers[index].classList.toggle("hidden");
answers[index].classList.toggle("show");

 if(display_button[index].textContent === "Mostrar explicação"){
    display_button[index].textContent = "Ocultar explicação"
 }else {
    display_button[index].textContent = "Mostrar explicação"
 }
   
}



restart.addEventListener("click", restartQuiz);

submit.addEventListener("click", checkAnswer);

