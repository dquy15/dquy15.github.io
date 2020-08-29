const quotes = [
  {
    quote: "Talk is cheap. Show me the code.😍😍"
  },
  {
    quote: "Java is to JavaScript what car is to Carpet.🤣🤣"
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute. 😱😱"
  },
  {
    quote:
      "Any fool can write code that a computer can understand 😂. Good programmers write code that humans can understand 😇."
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.🤔🤔"
  },
  {
    quote:
      "I'm not a great programmer; I'm just a good programmer with great habits.😍😍"
  },
  {
    quote: "Truth can only be found in one place: the code.😍"
  },
  {
    quote: "Before software can be reusable it first has to be usable.😍😱"
  },
  {
    quote: "Simplicity is the soul of efficiency.😍"
  },
  {
    quote: "Fix the cause, not the symptom. 😱"
  },
  {
    quote: "In order to be irreplaceable, one must always be different.😍"
  },
  {
    quote: "Experience is the name everyone gives to their mistakes. 🤔🤔"
  },
  {
    quote: "Ruby is rubbish! PHP is phpantastic! 🤣"
  },
  {
    quote: "No one is master something is missing"
  },
  {
    quote: "Bug is the Step to Success."
  },
  {
    quote: "Programming is the Best on Working."
  }
];

const button = document.getElementById("button-click");
const quote = document.getElementById("quote");

button.addEventListener("click", displayquote);

function displayquote() {
  let number = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[number].quote;
}
window.addEventListener("load", function() {
  let number = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[number].quote;
});
