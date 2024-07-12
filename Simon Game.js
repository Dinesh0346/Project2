 let userInput =[];
 let gameInput = [];
 let start = false;
 let level =0;
 let btns = ["red","yellow","green","purple"]
 let h2 = document.querySelector("h2")
 document.addEventListener("keypress" ,function(){
  if(start==false){
    console.log("game stated")
    start=true;
    levelUp()
  }
 })
 function levelUp(){
  userInput=[];
  level++
  h2.innerText=`Level ${level}`
  let randIdx = Math.floor(Math.random()*3)
  let randcolor = btns[randIdx]
  let randBtn = document.querySelector(`.${randcolor}`)
  btnFlash(randBtn);
  gameInput.push(randcolor)
  console.log(gameInput)
}
 function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
  btn.classList.remove("flash")
} , 250);
}
let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
  btn.addEventListener("click",btnpress)
}
function btnpress(){
  let btn = this;
  userflash(btn)
  userColor = btn.getAttribute("id")
  userInput.push(userColor)
  checkAns(userInput.length-1)
}
function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash")
  } , 250);
  }
  function checkAns(idx){
  
    if(userInput[idx]===gameInput[idx]){
      if(userInput.length==gameInput.length){
        setTimeout(levelUp() ,1000)
      }
    }else{
      h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to restart`
      document.querySelector("body").style.backgroundColor="red"
      setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white"

      } , 150)
      reset()
    }
  }
  function reset(){
    level=0
    start=false
    userInput=[]
    gameInput=[]
  }