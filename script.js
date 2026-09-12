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
let recipeContainer = document.getElementById("recipeContainer");
let rerollTwo = document.getElementById("rerollTwo");
let rollName = document.getElementById("rollName")


rollButton.addEventListener("click", event => {
    rollButton.style.display = "none";
    rerollButton.style.display = "flex";
    expandButton.style.display = "flex";
    rollName.style.display = "block";
})

expandButton.addEventListener("click", event => {
    mainContainer.style.display = "none";
    sideContainer.style.display = "flex";
    recipeContainer.style.display = "flex";
})

rerollTwo.addEventListener("click", event => {
    mainContainer.style.display = "flex";
    sideContainer.style.display = "none";
    recipeContainer.style.display = "none";
})