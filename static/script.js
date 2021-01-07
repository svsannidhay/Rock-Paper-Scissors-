
var time = 10*1000;
function startTimer1(){
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
}
function startTimer2(){
    time--;
    let tenseconds = Math.floor(time/10000);
    let tseconds = time - tenseconds*10000;
    let oneseconds = Math.floor(tseconds/1000);
    let tmseconds = tseconds - oneseconds*1000;
    let tenmseconds = Math.floor(tmseconds/100);
    let omseconds = tmseconds - tenmseconds*100;
    let onemseconds = Math.floor(omseconds/10);
    document.getElementById("timerP2").remove();
    let p = document.createElement("p");
    p.setAttribute("id","timerP2");
    let text = document.createTextNode(`${tenseconds}${oneseconds}:${tenmseconds}${onemseconds}`);
    p.appendChild(text);
    document.getElementById("tP2").appendChild(p);
}
function startClock1(){
    setInterval(startTimer1,1);
}
function startClock2(){
    setInterval(startTimer2, 1);
}

