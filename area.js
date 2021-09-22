const base=document.querySelector("#base");
const height=document.querySelector("#height");
const areabtn=document.querySelector("#area-btn");
const result=document.querySelector("#output");

areabtn.addEventListener("click",()=>{
  const area=((1/2)*(base.value)*(height.value));
  result.innerText=`Area of triangle is ${area}`;
})