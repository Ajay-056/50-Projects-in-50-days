const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

genearateJoke();

jokeBtn.addEventListener("click", genearateJoke);

async function genearateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeContainer.innerHTML = data.joke;
}
