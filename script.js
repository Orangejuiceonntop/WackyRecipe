//generate random number
let randomNum = Math.floor(Math.random() * 2) + 1;

console.log(randomNum);

//linking the generated number to the array thingy
let recipeIndex = randomNum;

window.addEventListener("load", ()=>{
    loadRecipes(recipeIndex);
})

function loadRecipes(indexNumb) {
    //fill this later
}

let rollButton = document.getElementById("rollButton");
let rerollButton = document.getElementById("rerollButton");
let expandButton = document.getElementById("expandButton");
let mainContainer = document.getElementById("mainContainer");
let sideContainer = document.getElementById("sideContainer");


rollButton.addEventListener("click", event => {
    rollButton.style.display = "none";
    rerollButton.style.display = "flex";
    expandButton.style.display = "flex";
})

expandButton.addEventListener("click", event => {
    mainContainer.style.display = "none";
    sideContainer.style.display = "flex";
})