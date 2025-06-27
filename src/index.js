function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Recipe is here",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");

recipeFormElement.addEventListener("submit", generateRecipe);
