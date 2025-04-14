function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: [
      "We become what we think about,energy flows where attention goes",
    ],
    autoStart: true,
    delay: 5,
    cursor: null,
  });
}
let quoteElement = document.querySelector("#quote-generator");
quoteElement.addEventListener("submit", generateQuote);
