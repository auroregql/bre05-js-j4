let text = document.querySelector("#text");
let hide = document.querySelector("#hide");
let show = document.querySelector("#show");

show.addEventListener ("click", () => {
    text.style.display = "block";
});

hide.addEventListener ("click", () => {
    text.style.display = "none";
})