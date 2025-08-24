let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let boxs=["orange","green","purple","red"]
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
  if(started==false){
     console.log("game is started");
     started=true;
     levelUp();
  }
 
});
function boxflash(box){
  box.classList.add("flash");
  setTimeout(function(){
    box.classList.remove("flash");
  },100);
}
function userflash(box){
  box.classList.add("userflash");
  setTimeout(function(){
    box.classList.remove("userflash");
  },100);
}
function cheak(idx){
 
 if(userSeq[idx]===gameSeq[idx]){
  if(userSeq.length==gameSeq.length){
    setTimeout(levelUp,500);
  }
  
 }else{
  h3.innerHTML=`game over!<b>your score was${level}</b> <br> press any key to start the game`;
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
  },200);
   resat();
 }

}
function levelUp(){
  userSeq=[];
level++;
h3.innerText=`Level${level}`;
let randmIdx=Math.floor(Math.random()*boxs.length);
let randmcolor=boxs[randmIdx];
let randmBox=document.querySelector(`.${randmcolor}`);
// console.log(randmIdx);
// console.log(randmBox);
// console.log(randmcolor);
gameSeq.push(randmcolor);
console.log(gameSeq)
boxflash(randmBox);
}
function boxpress(){
let btn=this;
userflash(btn);
userColor=btn.getAttribute("id");
userSeq.push(userColor);
cheak(userSeq.length-1);
}
let allboxes=document.querySelectorAll(".box");
for(box of allboxes){
  box.addEventListener("click",boxpress);
}
function resat(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=[];
}