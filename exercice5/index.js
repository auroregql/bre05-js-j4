let details = document.querySelector(".closed");
let span = document.querySelector("span");

span.addEventListener("click", (event) => {
    details.classList.toggle("closed");
    details.classList.toggle("open");
});