// Dark mode button

let button = document.querySelector("#togglebutton");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

button.addEventListener("click", toggleDarkMode);