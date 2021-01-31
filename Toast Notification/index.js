const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Message 1", "Message 2", "Message 3", "Message 4"];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const noti = document.createElement("div");
  noti.classList.add("toast");
  noti.innerText = getRandomMessage();
  toasts.appendChild(noti);

  setTimeout(() => {
    noti.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
