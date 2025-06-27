function displayRecipe(response) {
  console.log("Recipe generated");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "38cc12b312104o45t5c1faaa8bf9b6c0";
  let context =
    "You are a chef expert and you love to share you recipes. Your mission is to generate a quick easy recipe in basic HTML format. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a detailed recipe about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");

recipeFormElement.addEventListener("submit", generateRecipe);
