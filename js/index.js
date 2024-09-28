// !##### Html Elements
var quoteOutput = document.getElementById("quoteOutput");
var authorOutout = document.getElementById("authorOutout");
// ~#####Array
var quoteArray = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "― Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "― Mahatma Gandhi",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "― Mark Twain",
  },
];

// ^#####Function
function displayQuote() {
  var rundomQuote = Math.trunc(Math.random() * quoteArray.length + 1);
  document.getElementById(
    "quoteOutput"
  ).innerHTML = `"${quoteArray[rundomQuote].quote}"`;
  document.getElementById(
    "authorOutout"
  ).innerHTML = `"${quoteArray[rundomQuote].author}"`;
}
