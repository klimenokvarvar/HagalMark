let energyBuggy = document.getElementById("energy").innerHTML;
let powerBuggy = document.getElementById("power").innerHTML-1;
let countBuggy = document.getElementById("count").innerHTML;
let countMinute= document.getElementById("countHour").innerHTML;
//let countPower = document.getElementById("countPower").innerHTML;

function tapBuggy(){
    if(energyBuggy>= powerBuggy){
        energyBuggy= energyBuggy - powerBuggy;
        countBuggy= Number(countBuggy) + Number(powerBuggy);
        
        document.getElementById("energy").innerHTML = energyBuggy;
        document.getElementById("count").innerHTML = Math.floor(countBuggy);
    }
}

document.getElementById('buttonBuggy').addEventListener("mousedown",newPoint);

function newPoint(event){
    if(energyBuggy >= powerBuggy){
        let newImg = document.createElement("img");
        newImg.src = "lkj/jj.png";
        newImg.style.position = "absolute";
        newImg.style.width = "20px";
        newImg.style.height ="20px";
        newImg.style.left = event.pageX +"px";
        newImg.style.top = event.pageY +"px";
        document.getElementById("buttonBuggy").appendChild(newImg);

        let startPoint = event.pageY;
        let op =100
        let animatePoint = setInterval(function(){ 
            startPoint = startPoint -2;
            newImg.style.top = startPoint + "px";
            newImg.style.filter = "opacity("+op+"%)";
            op--;
        }, 10);

        setTimeout(function(){
                clearInterval(animatePoint);
                newImg.remove();
        },1000);
    }
}

setInterval(addEnergy, 500);

function addEnergy(){
    if(energyBuggy <= 100 - powerBuggy){
        energyBuggy += powerBuggy; //energyBuggy = energyBuggy + powerBuggy
        document.getElementById("energy"). innerHTML = energyBuggy;
    }
    countBuggy = Number(countBuggy) + document.getElementById("countHour").innerHTML/120;
    document.getElementById("count").innerHTML = Math.floor(countBuggy);
} 

function buyPower(){
    if(countBuggy>= document.getElementById("costPower").innerHTML){
        powerBuggy++;
        document.getElementById("power").innerHTML = powerBuggy +1;
        countBuggy -= document.getElementById('costPower').innerHTML;
        document.getElementById("costPower").innerHTML *=5;
    }
}

function openSetWindow(){
    document.getElementById("SetWindow").showModal();
}
function cloSetWindow(){
    document.getElementById("SetWindow").close();
}
function openVDWindow(){
    document.getElementById("VDWindow").showModal();
}
function cloVDWindow(){
    document.getElementById("VDWindow").close();
}
function buyCard(numberCard){
   
    if(countBuggy >= document.getElementById("costCardId"+numberCard).innerHTML){
        
        countBuggy = (countBuggy) - document.getElementById("costCardId"+numberCard).innerHTML;
        document.getElementById("countHour").innerHTML = Number(  document.getElementById("countHour").innerHTML)+ Number(document.getElementById("countHour").innerHTML) + Number(document.getElementById("countCardId"+numberCard).innerHTML);
        document.getElementById("levelCardId"+numberCard).innerHTML= Number( document.getElementById("levelCardId"+numberCard).innerHTML)+1;
        document.getElementById("costCardId"+numberCard).innerHTML= Number( document.getElementById("costCardId"+numberCard).innerHTML)*2;
        document.getElementById("countCardId"+numberCard).innerHTML= Math.floor(Number(document.getElementById("countCardId"+numberCard).innerHTML)*1.5);
    }
}