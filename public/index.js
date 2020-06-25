const submit = document.querySelector('.submit');
const results = document.querySelector('.results');
const filmPoster = {
    Arrietty: "./Assets/Arrietty.jpg",
//     'Castle in the Sky': "https://posterspy.com/wp-content/uploads/2020/01/Laputa-1500x2143.jpg",
//     'From Up on Poppy Hill': "https://www.sg.emb-japan.go.jp/JCC/img/2013.JCC%20Cinema/09.28%20From%20Up%20On%20Poppy%20Hill/Cover%20Poppy%20Hill.jpg",
//     'Grave of the Fireflies': "https://posterspy.com/wp-content/uploads/2020/01/GotF_Poster-1500x2246.jpg",
//     'Howls Moving Castle': "https://d1w8cc2yygc27j.cloudfront.net/-2048850116592702137/6358097631039497717.jpg",
//     'Kikis Delivery Service': "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/14e4e926078949.5634f466289b1.jpeg",
//     'My Neighbors the Yamadas': "https://m.media-amazon.com/images/M/MV5BNzgwODZkMmYtMTBhNi00OWU1LThjNjYtMmJlY2QxNjNlZDNiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
//     'Only Yesterday': "https://image.posterlounge.com/images/l/1886119.jpg",
//     'Pom Poko': "https://i.pinimg.com/564x/30/91/ec/3091ec58bcaa018a011869e9dfd06bb5.jpg",
//     Ponyo: "https://i.pinimg.com/originals/48/45/44/484544489476c91bf9ac265c0cda80ef.jpg",
//     'Porco Rosso': "https://img.mandarake.co.jp/webshopimg/03/00/657/0300100657/03001006570.jpg",
//     'Princess Mononoke': "https://ih1.redbubble.net/image.659783760.3829/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg",
//     'Spirited Away': "https://i.redd.it/gpy52skajd301.jpg",
//     'Tales from Earthsea': "https://m.media-amazon.com/images/M/MV5BZGFlN2FhYTktZGYzNi00MzllLWFlOTAtY2ExNjRjZjhkZWM2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
//     'The Cat Returns': "https://image.posterlounge.com/images/l/1886727.jpg",
//     'The Tale of Princess Kaguya': "https://i.pinimg.com/originals/12/8e/5e/128e5e52bf7fa84edd790cb5acce80de.jpg",
//     'The Wind Rises': "https://images-na.ssl-images-amazon.com/images/I/91iG4GyCJkL._AC_SL1500_.jpg",
//     'When Marnie was There': "https://images-na.ssl-images-amazon.com/images/I/81rtXxqhz-L._AC_SL1417_.jpg",
//     'Whisper of the Heart': "https://m.media-amazon.com/images/M/MV5BZDg0MWNmNjktMGEwZC00ZDlmLWI1MTUtMDBmNjQzMWM2NjBjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"

};

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
        let image = document.createElement('img');
        

        let title = document.createElement('p');
        title.innerText = film.title;

        let release = document.createElement('p');
        release.innerText = 'Released in: ' + film.release_date;

        let score = document.createElement('p');
        score.innerText = 'Rotten Tomatoes Critics Score: ' + film.rt_score;

        let description = document.createElement('p');
        description.innerText = film.description;

        let movie = document.createElement('div');

        console.log(film.title)
        console.log(film.release_date)
        console.log(film.rt_score)
        console.log(film.description)
        
        
        for (poster in filmPoster) {
            console.log('title', title);
            console.log('poster', poster);

            if (film.title == image) {
                image.src = filmPoster[poster];
            }
        }


        

        poster.appendChild(image);
        filmTitle.appendChild(title);
        releaseDate.appendChild(release);
        criticScore.appendChild(score);
        filmDescription.appendChild(description);


        
    }
    )
}