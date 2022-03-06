// "https://www.boredapi.com/api/activity"

let buttonEl = document.getElementById("btn-el");
let Activity = document.getElementById("activity");
let headerEl = document.getElementById("heading");

buttonEl.addEventListener("click", function () {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
      Activity.textContent = data.activity;
      headerEl.textContent = "Here's an activity :D";
      document.body.classList.add("fun");
    });
});
