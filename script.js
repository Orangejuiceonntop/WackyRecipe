//generate random number
let randomNum = Math.floor(Math.random() * 6) + 1;

console.log(randomNum);

//linking the generated number to the array thingy
let recipeIndex = randomNum;

function loadRecipes(indexNumb) {
    rollName.innerText = allRecipes[indexNumb - 1].name;
    recipeName.innerText = allRecipes[indexNumb - 1].name;
    recipeImage.src = `images/${allRecipes[indexNumb - 1].img}.jpg`;
    recipeImageTwo.src = `images/${allRecipes[indexNumb - 1].img}.jpg`;
    ingredients.innerText = allRecipes[indexNumb - 1].ingredients;
    instructions.innerText = allRecipes[indexNumb - 1].instructions;
}

function rollRecipe() {
    window.location.reload()
}

let rollButton = document.getElementById("rollButton");
let rerollButton = document.getElementById("rerollButton");
let expandButton = document.getElementById("expandButton");
let mainContainer = document.getElementById("mainContainer");
let sideContainer = document.getElementById("sideContainer");
let recipeContainer = document.getElementById("recipeContainer");
let rerollTwo = document.getElementById("rerollTwo");

let rollName = document.getElementById("rollName");
let recipeName = document.getElementById("recipeName");
let recipeImage = mainContainer.querySelector(".imgBox img");
let recipeImageTwo = sideContainer.querySelector(".imgBox img");

let instructions = document.getElementById("instructions");
let ingredients = document.getElementById("ingredients");

//make buttons work
rollButton.addEventListener("click", event => {
    rollButton.style.display = "none";
    rerollButton.style.display = "flex";
    expandButton.style.display = "flex";
    rollName.style.display = "block";
    loadRecipes(recipeIndex);
})

expandButton.addEventListener("click", event => {
    mainContainer.style.display = "none";
    sideContainer.style.display = "flex";
    recipeContainer.style.display = "flex";
})

rerollButton.addEventListener("click", event => {
    rollRecipe()
})

rerollTwo.addEventListener("click", event => {
    mainContainer.style.display = "flex";
    sideContainer.style.display = "none";
    recipeContainer.style.display = "none";
    rollRecipe();
})