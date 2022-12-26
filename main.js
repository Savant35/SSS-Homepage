const hamburger= document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", ()=>{
  img = hamburger.querySelector("img");
  if(navMenu.classList.toggle("is__active")){
    img.src = "./assets/img/close.svg";
  }
  else{
    img.src = "./assets/img/menu.svg";
  }
});

let counter = 1;
setInterval(()=>{
  document.getElementById("radio" + counter).checked=true;
  counter =  counter >= 7 ? 1: counter + 1;
},4000)
