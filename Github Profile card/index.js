const api_URL = "http://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const clear = document.querySelector(".btn-clear");
const submit = document.querySelector(".btn-submit");

async function getUser(username) {
  try {
    const res = await axios(api_URL + username);
    createUserCard(res.data);
    getRepos(username);
  } catch (err) {
    if (err.status == 404) createErrorCard("No profile with this username!");
  }
}

async function getRepos(username) {
  try {
    const res = await axios(api_URL + username + "/repos?sort=created");
    addReposToCard(res.data);
  } catch (err) {
    createErrorCard("Problem fetching repos!");
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
    </div>

    <div class="user-info">
        <h2>${user.login}</h2>
        <p>${user.bio}</p>

        <ul>
            <li><strong>${user.followers} Followers</strong></li>
            <li><strong>${user.following} Following</strong></li>
            <li><strong>${user.public_repos} Repos</strong></li>
        </ul>

        <div id="repos">
        
        </div>
    </div>
</div>`;

  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `<div class="card">
                    <h1>${message}</h1>
                    </div>`;

  main.innerHTML = cardHTML;

  setTimeout(() => {
    main.innerHTML = "";
  }, 3000);
}

form.addEventListener("submit", (e) => {
  eventCommon(e);
});

submit.addEventListener("click", (e) => {
  eventCommon(e);
});

function eventCommon(e) {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

clear.addEventListener("click", () => (main.innerHTML = ""));
