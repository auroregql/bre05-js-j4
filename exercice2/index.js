let button = document.querySelector('button');
let text = document.querySelector('#text');

button.addEventListener ("click", (event) => {
    text.classList.toggle("red");
})