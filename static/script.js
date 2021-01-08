async function startClock1(){
    let time = 1*1000;
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
    let time = 1*1000;
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
            console.log("chalra?");
            if (time == 0) {
                resolve();
                clearInterval(t);
            }
        }, 1);
    })
}

async function onevone(){
    let count = 0;
    while(count<10){
        if(count%2==0){
            await startClock1();
            count++;
        }else{
            await startClock2();
            count++;
        }
    } 
}