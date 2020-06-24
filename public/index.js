const submit = document.querySelector('.submit');
// const filmPoster = document.querySelector('img');
const filmTitle = document.querySelector('ul');
const releaseDate = document.querySelector('ul');
const criticScore = document.querySelector('ul')
const filmDescription = document.querySelector('ul');


submit.addEventListener('click', displayFilm);

let url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        displayFilm(json)
    })
    .catch(err => console.log(err));

    function displayFilm(json) {
    json.forEach(film => {

        // let poster = document.createElement('img');
        // poster.src = "/Assets/image.jpg";

        let title = document.createElement('ul');
        title.innerText = film.title;

        let release = document.createElement('ul');
        release.innerText = 'Released in: ' + film.release_date;

        let score = document.createElement('ul');
        score.innerText = 'Rotten Tomatoes Critics Score: ' + film.rt_score;

        let description = document.createElement('ul');
        description.innerText = film.description;

        // console.log(poster.src)
        console.log(film.title)
        console.log(film.release_date)
        console.log(film.rt_score)
        console.log(film.description)

        // filmPoster.appendChild(poster);
        filmTitle.appendChild(title);
        releaseDate.appendChild(release);
        criticScore.appendChild(score);
        filmDescription.appendChild(description);

    }



    )
};
