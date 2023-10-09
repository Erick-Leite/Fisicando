const answers = ["c1", "a2", "b3", "d4", "c5", "c6", "b7", "e8", "a9", "b10"]

let score = 0;

const submit = document.getElementById("submit");
const perguntas = document.querySelectorAll(".perguntas");
const resultado = document.getElementById("resultado");
const restart = document.getElementById("restart");
const display_button = [...document.querySelectorAll(".display_button")];
var radios = document.querySelectorAll("input[type=radio]");
const respostas = [...document.getElementsByClassName("respostas")];


function checkAnswer(){
  
  for(let i=0; i<radios.length; i++){
    let radio = radios[i];
    
    if(radio.checked){
      let userAnswer = radio.value;
      
      let correctAnswer = answers[Math.floor(i / 5)];
      
      
      if(userAnswer === correctAnswer){       
        score++;
        radios[i].classList.add("correct_answers")    
      }else {
radios[i].classList.add("incorrect_answers");  
      }
      
    }  
      
  }
    
 resultado.innerHTML = `Você acertou ${score} de ${perguntas.length} perguntas`

 
 submit.classList.add("ocultar");
 resultado.classList.remove("ocultar");
 restart.classList.remove("ocultar");

 for(let i=0; i<radios.length; i++){
     let radio = radios[i];
     if(radio.checked){
        let index = Math.floor(i / 5);
        display_button[index].classList.remove("ocultar")
        
     }
         
 }

}


function restartQuiz(){
  
  for(let i=0; i<radios.length; i++){
    radios[i].checked = "";
    radios[i].classList.remove("correct_answers", "incorrect_answers");
    
  }
  
  score = 0;
  resultado.classList.add("ocultar");
  restart.classList.add("ocultar");
  submit.classList.remove("ocultar");
  
  for(let i=0; i<display_button.length; i++){
    
    if(display_button[i].textContent === "Ocultar explicação"){

display_button[i].textContent = `Mostrar explicação`;

respostas[i].classList.add("ocultar")

    }
 
    display_button[i].classList.add("ocultar")
    
        
  }

for(let i=0; i<respostas.length; i++){
    respostas[i].classList.remove("exibir");
    
}

  
  
}


function show_hide(index){
  respostas[index].classList.toggle("ocultar");
respostas[index].classList.toggle("exibir");

 if(display_button[index].textContent === "Mostrar explicação"){
    display_button[index].textContent = "Ocultar explicação"
 }else {
    display_button[index].textContent = "Mostrar explicação"
 }
   
}



restart.addEventListener("click", restartQuiz);

submit.addEventListener("click", checkAnswer);

