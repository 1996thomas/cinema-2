let url = "http://www.omdbapi.com/?i=tt3896198&apikey=26134001";
const form = document.querySelector("form");
const input = document.querySelector(
  "body > form:nth-child(1) > input:nth-child(1)"
);
console.log(form);

const movies = [];

class Movie {
  constructor(title) {
    this.title = title;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  url = `http://www.omdbapi.com/?s=${input.value}&apikey=26134001`;
  console.log(url);
  jsonUrl(url);
});

async function jsonUrl(url) {
  const response = await fetch(url);
  const data = await response.json();
  data.Search.map((movie) => {
    ;
    displayTitle(recupData(movie))
  });
}

function recupData(data) {
  let title = data.Title;
  movies.push(new Movie(title));
}

function displayTitle(data) {
  let div = document.createElement('h1')
  let divContent = document.createTextNode(data)
  div.appendChild(divContent)
  document.body.appendChild(div)
}
