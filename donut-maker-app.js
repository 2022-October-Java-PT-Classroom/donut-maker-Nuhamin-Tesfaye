import {DonutMaker} from "./donut-maker.js";

const totalNumberOfDonutCount = document.querySelector(".donut-count");
const totalNumberOfAutoClickerCount = document.querySelector(".auto-clicker-count");
const totalNumberOfDonutMultiplierCount = document.querySelector(".donut-multiplier-count");
const totalValueOfDonutMultiplier = document.querySelector(".donut-multiplier-value");
const totalAutoClickerPrice = document.querySelector(".auto-clicker-price");
const totalDonutMultiplierPrice = document.querySelector(".multiplier-price");

const donut = new DonutMaker();

function updateAll(){
updateDonutCount();
updateAutoClickerCount();
updateAutoClickerPrice();
updateDonutMultiplierCount();
updateDonutMultiplierPrice();
updateDonutMultiplierValue();
}

const donutMakeButton = document.querySelector(".donut-button");
donutMakeButton.addEventListener("click" , () => {
    donut.donutCounter();
    updateAll();
});

const autoClickerButton = document.querySelector(".auto-clicker-button");
autoClickerButton.addEventListener("click",() => {
    donut.buyAutoClicker();
    updateAll();

});


const donutMultiplierButton = document.querySelector(".donut-multiplier-button")
 donutMultiplierButton.addEventListener("click",() => {
    donut.buyDonutMultiplier();
    updateAll();

});

const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", () => {
    donut.restartTheGame();

  });

  makeAutoClicker()


function updateDonutCount() {
     totalNumberOfDonutCount.innerText = "Total Donut Count :"+ donut.getDonutCount();
     }

function updateAutoClickerCount() {
    totalNumberOfAutoClickerCount.innerText = "Auto Clicker Count : " + donut.getAutoClickerCount();
}

function updateAutoClickerPrice() {
    totalAutoClickerPrice.innerText = "Auto Clicker price :" + donut.getAutoClickerCost();
  }


function updateDonutMultiplierCount() {
    totalNumberOfDonutMultiplierCount.innerText = "Donut Multiplier Count :"  + donut.getDonutMultiplierCount();
}

function updateDonutMultiplierPrice() {
    totalDonutMultiplierPrice.innerText = "Donut Multiplier Price :" +  donut.getDonutMultiplierCost();
}

function updateDonutMultiplierValue() {
    totalValueOfDonutMultiplier.innerText = "Donut Multiplier Value :" +  donut.donutMultiplierValue();
}

function disableAutoClickerButton() {
    const autoClickerButton = document.querySelector(".auto-clicker-button");
    if(donut.getAutoClickerCost() < donut.getDonutCount()){
        autoClickerButton.disabled = true;
 }
 else {
    autoClickerButton.disabled = false;
  }

}

function disableDonutMultiplierButton() {
    const donutMultiplierButton = document.querySelector(  ".Donut-multiplier-button" );
    if(donut.getDonutMultiplierCost() < donut.getDonutCount()){
        donutMultiplierButton.disabled = true;
    }
    else{
        donutMultiplierButton.disabled = false;
    }

}

function makeAutoClicker() {
    setInterval(() => {
        donut.activateAutoClicker();
        updateAll();
    }, 1000);

}


    