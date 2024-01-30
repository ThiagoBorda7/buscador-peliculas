document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = '40868bcd1d4c4851cd7697e591d94aa3';
let url_base = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'

let resulContainer = document.getElementById('results');

function searchMovies(){
    resulContainer.innerHTML = 'Cargando...s';
    let searchInput = document.getElementById('searchInput').value;

    fetch(`${url_base}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}


function displayMovies(movies){

    resulContainer.innerHTML = '';

    if(movies.length === 0){
        resulContainer.innerHTML = '<p>No se encontraron resultados para tu busqueda</p>';
        return
    }

    movies.forEach(movie => {
        let divMovies = document.createElement('div');
        divMovies.classList.add('movie');

        let title = document.createElement('h2');
        title.textContent = movie.title;

        let releaseDate = document.createElement('p');
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date;

        let overview = document.createElement('p');
        overview.textContent = movie.overview;

        let posterPath = urlImg + movie.poster_path;
        let poster = document.createElement('img');
        poster.src = posterPath;

        divMovies.appendChild(poster);
        divMovies.appendChild(title);
        divMovies.appendChild(releaseDate);
        divMovies.appendChild(overview);

        resulContainer.appendChild(divMovies);
    })
}