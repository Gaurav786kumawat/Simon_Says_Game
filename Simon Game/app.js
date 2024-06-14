let gameSeq=[];
let userSeq=[];

let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// ! Key press and game start
document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
    });


// ! Flash buttons and level up
function gameFlash(btn){ // flash the button
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){ // flash the button
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random()*btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}



// ! Button Event Listeners 

function checkAns(idx){
    // console.log("current level : " , level);
    if(userSeq[idx] == gameSeq[idx]){
        // console.log("Same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over ! Your Score was <b>${level-1}</b> </br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 1000);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}


// ! Function Reset
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}