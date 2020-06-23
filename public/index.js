const submit = document.querySelector('.submit');
const filmResults = document.querySelector('ul');


submit.addEventListener('click', displayFilm);

let url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        displayFilm(json)
    })
    .catch(err => console.log(err));



function displayFilm(json) {


    json.forEach(element => {
        console.log(element.title)
        console.log(element.description)
        


    }



)};
