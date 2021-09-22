const quizForm=document.querySelector(".quiz-form");
const submitbtn=document.querySelector("#submit-btn");
const result=document.querySelector(".result");
const userInput=document.querySelectorAll("input[name=question1]");
console.log(userInput);

const answers=["Yes", "No", "Yes", "Yes","Yes", "Isosceles", "30°","Equilateral", "5", "Scalene"];

submitbtn.addEventListener("click",()=>{
let score=0;
let index=0;

const formresult=new FormData(quizForm);

for(let value of formresult.values()){
  if(value===answers[index]){
    score++;
  }
  index++;
}
result.innerText="Your Score is "+ score;

})

