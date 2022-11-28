const tmdbKey = 'cb1226806121032af3a180b6374001c8';
const req_api_example = 'https://api.themoviedb.org/3/movie/550?api_key=cb1226806121032af3a180b6374001c8'
const v4_auth = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjEyMjY4MDYxMjEwMzJhZjNhMTgwYjYzNzQwMDFjOCIsInN1YiI6IjYzODQxNDE4YmYwOWQxMDBhZmQxNmI1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wJbFU9mvIrHQQk0e-aavA1HKP6PDROYpnehwpweghso'
const tmdbBaseUrl = 'https://api.themoviedb.org/3/movie/76341?api_key=';
const playBtn = document.getElementById('playBtn');

const getGenres = () => {

};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;