function displayQuote(response) {
  console.log("quote generated");
  new Typewriter("#quote", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions");

  let apiKey = "0c5feca50of64837dbc3d78adbt43801";
  let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
  let context =
    " You are an AI assistant with extensive knowledge about quotes related to different topics. Please generate your answer in a short quote along with the person who coined the quote. Make sure to follow the below user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Quote is being generated");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayQuote);
}
let quoteElement = document.querySelector("#quote-generator");
quoteElement.addEventListener("submit", generateQuote);
