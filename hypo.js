const side1=document.querySelector("#side1");
const side2=document.querySelector("#side2");
const hypobtn=document.querySelector("#hypo-btn");
const result=document.querySelector("#output");

hypobtn.addEventListener("click",()=>{
  a=side1.value;
  b=side2.value;
  const hypo=(Math.sqrt((a*a)+(b*b))).toFixed(2);
  result.innerText=`Hypotenous : ${hypo}`;
})