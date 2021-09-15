// variables
const oneJoke = document.querySelector('#one-joke');
const randomJoke = document.querySelector('#random-joke');
const randomCategory = document.querySelector('#random-category');

let jokes = [];

//functions
const randomJoke = () => {
  fetch('http://localhost:5000/api/jokes')
    .then((res) => res.json())
    .then((data) => {
      let jokes = data.result.slice(0, 10);

      searchResults.innerHTML = jokes.reduce((total, currentJoke) => {
        total += `
          <ul>
          <li>${currentJoke.value}</li>
          </ul>
          `;

        return total;
      }, '');
    });
};

oneJoke.addEventListener('clicked', randomJoke);
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:5000/api/jokes' + 'chuck')
    .then((res) => res.json())
    .then((data) => jokes.push(...data.result));
});
