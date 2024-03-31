let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red","yellow","purple","green"];
// let btn = document.querySelector(".btn");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started= true;
        levelUp();
    }
});


function btnFlash(btn){
        // ranBtn.style.color="white";

        btn.classlist.add("fash");
        setTimeout(function() {
            btn.classList.remove("fash");
        },1000);
    }


function levelUp(){
    level++;
    h2.innerText = `level ${level}`;
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    console.log(ranIdx);
    console.log(ranColor);
    console.log(ranBtn);
    btnFlash(ranBtn);
}
