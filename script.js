const userInput=document.querySelectorAll(".user-input");
const output=document.querySelector("#output");
const button=document.querySelector("#triangle-type-btn");
console.log(button);

button.addEventListener("click",()=>{
  a=Number(userInput[0].value); 
  b=Number(userInput[1].value); 
  c=Number(userInput[2].value);
 isValidTriangle(a,b,c);

});

function isValidTriangle(a,b,c) {
  if((a<90) && (b<90) && (c < 90)){
    triangleType="Acute angled";
  }
  else if((a>90) || (b>90) || (c>90)){
    triangleType="Obtuse angled";
  }
  else{
    triangleType="Right angled";
  }
 const sum=a+b+c;
 console.log(sum);
 if(sum===180)
   output.innerText=`Yay! These angles form a ${triangleType} Triangle.`;
else
    output.innerText="Oops! These angles don't form a Triangle. Try again!";
}

