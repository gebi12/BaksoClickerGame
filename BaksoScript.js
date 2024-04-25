let bakso = 0;
let DagingCost = 15;
let AbangCost = 100;
let mibihuncost = 1500;
let uratcost = 5000;
let telurcost = 10000;
let DagingCount = 0;
let AbangCount = 0;
let mibihunCount = 0;
let uratCount = 0;
let telurCount = 0;
let clicks = 0;

function BaksoClick() {
  clicks++;
  bakso++;
  document.getElementById("bakso").innerHTML = bakso;
  playBaksoSound();

  let newImage = document.createElement("img");
  newImage.src = "pics/Bakso1.png";
  newImage.style.position = "absolute";

  let size = Math.floor(Math.random() * 70) + 50; 
  newImage.style.width = size + "px";
  newImage.style.height = size + "px";

  let x = Math.floor(Math.random() * 50) + 25;
  let y = Math.floor(Math.random() * 50) + 25; 
  newImage.style.left = x + "%";
  newImage.style.top = y + "%";

  document.body.appendChild(newImage);

  let angle = Math.random() * Math.PI * 5;
  let speed = Math.random() * 10 + 5;
  let dx = Math.cos(angle) * speed;
  let dy = Math.sin(angle) * speed;

  let animateInterval = setInterval(frame, 10);
  let pos = 0;

  function frame() {
    if (pos === 100) {
      clearInterval(animateInterval);
      newImage.parentNode.removeChild(newImage);
    } else {
      pos++;
      newImage.style.top = (y - (pos * dy / 100)) + "%";
      newImage.style.left = (x + (pos * dx / 100)) + "%";
    }
  }
}

function buyUpgrade(type) {
  let cost = 0;
  if (type === "Daging") {
    cost = DagingCost;
  } else if (type === "Abang") {
    cost = AbangCost;
  } else if(type === "mibihun"){
    cost = mibihuncost;
  } else if(type === "urat"){
    cost = uratcost;
  } else if(type === "telur"){
    cost = telurcost;
  }
  if (bakso >= cost) {
    bakso -= cost;
    document.getElementById("bakso").innerHTML = bakso;
    if (type === "Daging") {
      DagingCount++;
      DagingCost = Math.round(DagingCost * 1.2);
      document.getElementById("Daging").innerHTML = "Cursor : " + DagingCost;
    } else if (type === "Abang") {
      AbangCount++;
      AbangCost = Math.round(AbangCost * 1.2);
      document.getElementById("Abang").innerHTML = "Buka Cabang Baru : " + AbangCost;
    }
    else if(type == "mibihun"){
      mibihunCount++;
      mibihuncost = Math.round(mibihuncost * 1.2);
      document.getElementById("mibihun").innerHTML = "Mie & Bihun : " + mibihuncost;
      if(mibihunCount<2){
        let popup = document.getElementById("upmenu");
        popup.style.display = "block";
        popup.classList.add("animated");
        setTimeout(() => {
          popup.style.display = "none";
          popup.classList.remove("animated");
        }, 3000);
      }
    }
    else if(type == "urat"){
      uratCount++;
      uratcost = Math.round(uratcost * 1.2);
      document.getElementById("urat").innerHTML = "Bakso Urat : " + uratcost;
      if(uratCount<2){
        let popup = document.getElementById("upmenu");
        popup.style.display = "block";
        popup.classList.add("animated");
        setTimeout(() => {
          popup.style.display = "none";
          popup.classList.remove("animated");
        }, 3000);
      }
    }
    else if(type == "telur"){
      telurCount++;
      telurcost = Math.round(telurcost * 1.2);
      document.getElementById("telur").innerHTML = "Bakso Telur : " + telurcost;
      if(telurCount<2){
        let popup = document.getElementById("upmenu");
        popup.style.display = "block";
        popup.classList.add("animated");
        setTimeout(() => {
          popup.style.display = "none";
          popup.classList.remove("animated");
        }, 3000);
      }
    }
  }
  else{
    alert("Not enough bakso to buy !");
  }
}


function playBaksoSound() {
  let BaksoSound = document.getElementById("bakso-audio");
  BaksoSound.currentTime = 0;
  BaksoSound.play();
}

function DagingAutoClick() {
  bakso += DagingCount;
  document.getElementById("bakso").innerHTML = bakso;
}

function AbangAutoClick() {
  bakso += AbangCount * 2;
  document.getElementById("bakso").innerHTML = bakso;
}

function MieBihunAutoClick() {
  bakso += mibihunCount;
  document.getElementById("bakso").innerHTML = bakso;
}

function UratAutoClick() {
  bakso += uratCount;
  document.getElementById("bakso").innerHTML = bakso;
}

function TelurAutoClick() {
  bakso += telurCount;
  document.getElementById("bakso").innerHTML = bakso;
}

setInterval(DagingAutoClick, 1000);
setInterval(AbangAutoClick, 3000);
setInterval(MieBihunAutoClick, 5000);
setInterval(UratAutoClick, 8000);
setInterval(TelurAutoClick, 10000);
