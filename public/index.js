const submit = document.querySelector('.submit');
const filmResults = document.querySelector('.ul');


submit.addEventListener('click', displayFilm);

let url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
    })
    .catch(err => console.log(err));

function displayFilm(json) {
   for (let i = 0; i < json.title; i++) {
       let title = document.createElement('li');
   }
    


}


