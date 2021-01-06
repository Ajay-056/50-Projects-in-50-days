const api_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f79c19e7886b816374cbc91977f024fa&page=1";

const imgPath = "https://image.tmdb.org/t/p/w1280";

const search_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=f79c19e7886b816374cbc91977f024fa&query='";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(api_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");

    movieEl.classList.add("movie");

    movieEl.innerHTML = `
    <img src="${imgPath + poster_path}" alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${colorIndicator(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>
    `;

    main.appendChild(movieEl);
  });
}

function colorIndicator(rating) {
  if (rating >= 8) {
    return "green";
  } else if (rating >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(search_URL + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
