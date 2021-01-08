async function startClock1(){
    let time = 5*1000;
    return new Promise(function (resolve, reject) {
        let t = setInterval(function(){
            time--;
            let tenseconds = Math.floor(time/10000);
            let tseconds = time - tenseconds*10000;
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
            if (time == 0) {
                resolve();
                clearInterval(t);
            }
        }, 1);
    });
}
function startClock2(){
    let time = 5*1000;
    return new Promise(function(resolve,reject){
        let t = setInterval(function(){
            time--;
            let tenseconds = Math.floor(time / 10000);
            let tseconds = time - tenseconds * 10000;
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
            if (time == 0) {
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
    }
    if(turn==2){
        sp1 = 'R';
    }
}
function clickPaper(){
    if(turn==1){
        sp1 = 'P';
    }
    if(turn==2){
        sp1 = 'P';
    }
}
function clickScissors(){
    if(turn==1){
        sp1 = 'S';
    }
    if(turn==2){
        sp1 = 'S';
    }
}

var scoreP1 = 0;
var scoreP2 = 0;

async function onevone(){
    let count = 0;
    while(count<2){
        if(count%2==0){
            turn = 1;
            await startClock1();
            if(sp1=='0'){
                sp1 = rpsArray[generateRandom()];
            }
            console.log(sp1);
            count++;
        }else{
            turn = 2;
            await startClock2();
            if(sp2=='0'){
                sp2 = rpsArray[generateRandom()];
            }
            console.log(sp2);
            if(sp1=='R'&&sp2=='P'){
                scoreP2++;
                console.log("P2 wins");
            }
            else if(sp1=='R'&&sp2=='S'){
                scroeP1++;
                console.log("P1 wins");
            }
            else if(sp1=='P'&&sp2=='R'){
                scoreP1++;
                console.log("P1 wins");
            }
            else if(sp1=='P'&&sp2=='S'){
                scroeP2++;
                console.log("P2 wins");
            }
            else if(sp1=='S'&&sp2=='R'){
                scoreP2++;
                console.log("P2 wins");
            }
            else if(sp1=='S'&&sp2=='P'){
                scroeP1++;
                console.log("P1 wins");
            }
            
            sp1 = '0';
            sp2 = '0';
            count++;
        }
    } 
}
