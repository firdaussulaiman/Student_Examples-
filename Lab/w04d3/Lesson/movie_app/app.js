console.log("W04D3!");

// url that is hosted the omdb api
const url = "http://www.omdbapi.com/";

// store our api key
const apiKey = "c71dad23";

// imdbQuery
let imdbQuery = "";

// construct our query to API
let query = `${url}?i=${imdbQuery}&apikey=${apiKey}`;

console.log(query);

document.addEventListener("DOMContentLoaded", () => {
  // add form submit event listener and handler
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents the page from refreshing

    // get the input value
    const inputValue = document.querySelector('input[type="text"]').value;
    imdbQuery = inputValue.trim(); // remove any trailing chars

    if (imdbQuery !== "") {
      query = `${url}?i=${imdbQuery}&apikey=${apiKey}`; // update query with the new imdbQuery
      fetch(query) // this can take many secs we just dont know
        .then((response) => response.json())
        .then((movieData) => {
          // process or play with the data returned
          //console.log("Line 19: This is after the fetch function returns with the response");
          console.log("movie data:", movieData);

          // populate our movie data into the div container using DOM manipulation
          const containerEl = document.querySelector(".container");
          containerEl.innerHTML = `
            <h2>${movieData.Title}</h2>
            <h3>${movieData.Year}</h3>
            <h4>${movieData.Genre}</h4>
            <p>${movieData.Plot}</p>
          `;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  //console.log("Line 26: Hi there! This is right after the fetch function");
});
/*
Here is your key: c71dad23

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=c71dad23
*/
