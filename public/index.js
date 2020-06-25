const submit = document.querySelector('.submit');
const results = document.querySelector('.results');


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
        let image = document.createElement('img');


        let title = document.createElement('p');
        title.innerText = film.title;

        let release = document.createElement('p');
        release.innerText = 'Released in: ' + film.release_date;

        let score = document.createElement('p');
        score.innerText = 'Rotten Tomatoes Critics Score: ' + film.rt_score;

        let description = document.createElement('p');
        description.innerText = film.description;

        console.log(film.title)
        console.log(film.release_date)
        console.log(film.rt_score)
        console.log(film.description)



        var poster_path = './Assets/' + film.title.split(' ').join('%20') + '.jpg';

        console.log('poster_path', poster_path);

        image.src = poster_path;

        results.appendChild(image);
        results.appendChild(title);
        results.appendChild(release);
        results.appendChild(score);
        results.appendChild(description);



    }
    )
}