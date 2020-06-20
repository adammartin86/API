const submit = document.querySelector('.submit');

// submit.addEventListener('click', displayFilm);

let url =  'https://ghibliapi.herokuapp.com/films'; 

fetch(url)
.then(function(response){
    return response.json();
})    
    .then(function(json){
        console.log(json);
        displayFilm(json);
})
.catch(err => console.log(err));

function displayFilm(json){
    e.preventDefault();
    
}