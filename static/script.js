var time1,time2;
async function startClock1(){
    time1 = 1*1000;
    return new Promise(function (resolve, reject) {
        let t = setInterval(function(){
            time1--;
            let tenseconds = Math.floor(time1/10000);
            let tseconds = time1 - tenseconds*10000;
            let oneseconds = Math.floor(tseconds/1000);
            let tmseconds = tseconds - oneseconds*1000;
            let tenmseconds = Math.floor(tmseconds/100);
            let omseconds = tmseconds - tenmseconds*100;
            let onemseconds = Math.floor(omseconds/10);
            document.getElementById("timerP1").remove();
            let p = document.createElement("p");
            p.setAttribute("id","timerP1");
            let text = document.createTextNode(`${tenseconds}${oneseconds}:${tenmseconds}${onemseconds}`);
            p.appendChild(text);
            document.getElementById("tP1").appendChild(p);
            if (time1 == 0) {
                resolve();
                clearInterval(t);
            }
        }, 1);
    });
}
function startClock2(){
    time2 = 1*1000;
    return new Promise(function(resolve,reject){
        let t = setInterval(function(){
            time2--;
            let tenseconds = Math.floor(time2 / 10000);
            let tseconds = time2 - tenseconds * 10000;
            let oneseconds = Math.floor(tseconds / 1000);
            let tmseconds = tseconds - oneseconds * 1000;
            let tenmseconds = Math.floor(tmseconds / 100);
            let omseconds = tmseconds - tenmseconds * 100;
            let onemseconds = Math.floor(omseconds / 10);
            document.getElementById("timerP2").remove();
            let p = document.createElement("p");
            p.setAttribute("id", "timerP2");
            let text = document.createTextNode(
            `${tenseconds}${oneseconds}:${tenmseconds}${onemseconds}`
            );
            p.appendChild(text);
            document.getElementById("tP2").appendChild(p);
            if (time2 == 0) {
                resolve();
                clearInterval(t);
            }
        }, 1);
    })
}

function generateRandom(){
    return Math.floor(Math.random() * 2.9999);
}

var turn = -1;
var sp1 = '0';
var sp2 = '0';
var rpsArray = ['R','P','S'];


function clickRock(){
    if(turn==1){
        sp1 = 'R';
        time1 = 1;
    }
    if(turn==2){
        sp2 = 'R';
        time2 = 1;
    }
}
function clickPaper(){
    if(turn==1){
        sp1 = 'P';
        time1 = 1;
    }
    if(turn==2){
        sp2 = 'P';
        time2 = 1;
    }
}
function clickScissors(){
    if(turn==1){
        sp1 = 'S';
        time1 = 1;
    }
    if(turn==2){
        sp2 = 'S';
        time2 = 1;
    }
}

var scoreP1 = 0;
var scoreP2 = 0;

function updateScoreBoard(){
    let scoreP1Tens = Math.floor(scoreP1/10);
    let scoreP1Left = scoreP1 - scoreP1Tens*10;
    let scoreP2Tens = Math.floor(scoreP2/10);
    let scoreP2Left = scoreP2 - scoreP2Tens*10;
    document.getElementById("score").remove();
    let p = document.createElement("p");
    p.setAttribute("id","score");
    let text = document.createTextNode(`${scoreP1Tens}${scoreP1Left}:${scoreP2Tens}${scoreP2Left}`);
    p.appendChild(text);
    document.getElementById("SB").appendChild(p);
}

function p1won(){
    document.getElementById("result").remove();
    let p = document.createElement("p");
    p.setAttribute("id","result");
    let text = document.createTextNode("PLAYER 1 WON");
    p.appendChild(text);
    document.getElementById("res").appendChild(p);
}
function p2won(){
    document.getElementById("result").remove();
    let p = document.createElement("p");
    p.setAttribute("id", "result");
    let text = document.createTextNode("PLAYER 2 WON");
    p.appendChild(text);
    document.getElementById("res").appendChild(p);
}
function draw(){
    document.getElementById("result").remove();
    let p = document.createElement("p");
    p.setAttribute("id", "result");
    let text = document.createTextNode("DRAW");
    p.appendChild(text);
    document.getElementById("res").appendChild(p);
}
function showstats(){
    document.getElementById("p1Choice").remove();
    let p1 = document.createElement("p");
    p1.setAttribute("id","p1Choice");
    let textP1;
    if(sp1=='R'){
        textP1 = document.createTextNode("Player 1 : ROCK ");
    }else if(sp1=='S'){
        textP1 = document.createTextNode("Player 1 : SCISSORS ");
    }else if(sp1=='P'){
        textP1 = document.createTextNode("Player 1 : PAPER ");
    }
    p1.appendChild(textP1);
    document.getElementById("player1").appendChild(p1);

    document.getElementById("p2Choice").remove();
    let p2 = document.createElement("p");
    p2.setAttribute("id","p2Choice");
    let textP2;
    if(sp2=='R'){
        textP2 = document.createTextNode("Player 2 : ROCK ");
    }else if(sp2=='S'){
        textP2 = document.createTextNode("Player 2 : SCISSORS ");
    }else if(sp2=='P'){
        textP2 = document.createTextNode("Player 2 : PAPER ");
    }
    p2.appendChild(textP2);
    document.getElementById("player2").appendChild(p2);


}

async function match(){
    document.getElementById("p1Choice").remove();
    let p1 = document.createElement("p");
    p1.setAttribute("id", "p1Choice");
    let textP1 = document.createTextNode("PLAYER 1");
    p1.appendChild(textP1);
    document.getElementById("player1").appendChild(p1);
    document.getElementById("p2Choice").remove();
    let p2 = document.createElement("p");
    p2.setAttribute("id", "p2Choice");
    let textP2 = document.createTextNode("PLAYER 2");
    p2.appendChild(textP2);
    document.getElementById("player2").appendChild(p2);
    document.getElementById("result").remove();
    let p = document.createElement("p");
    p.setAttribute("id", "result");
    let text = document.createTextNode("LET'S GO");
    p.appendChild(text);
    document.getElementById("res").appendChild(p);
    let count = 0;
    while(count<2){
        if(count%2==0){
            turn = 1;
            console.log(turn);
            await startClock1();
            if(sp1=='0'){
                sp1 = rpsArray[generateRandom()];
            }
            console.log(sp1);
            count++;
        }else{
            turn = 2;
            console.log(turn);
            await startClock2();
            if(sp2=='0'){
                sp2 = rpsArray[generateRandom()];
            }
            console.log(sp2);
            if(sp1=='R'&&sp2=='P'){
                scoreP2++;
                p2won();
            }
            else if(sp1=='R'&&sp2=='S'){
                scoreP1++;
                p1won();
            }
            else if(sp1=='P'&&sp2=='R'){
                scoreP1++;
                p1won();
            }
            else if(sp1=='P'&&sp2=='S'){
                scoreP2++;
                p2won();
            }
            else if(sp1=='S'&&sp2=='R'){
                scoreP2++;
                p2won();
            }
            else if(sp1=='S'&&sp2=='P'){
                scoreP1++;
                p1won();
            }else{
                draw();
            }
            showstats();
            updateScoreBoard();
            sp1 = '0';
            sp2 = '0';
            count++;
        }
    } 
}

function onevone(){
    document.getElementById("unhide").classList.remove("hideStuff");
    match();
}