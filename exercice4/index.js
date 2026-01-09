let tab1 = document.querySelector("#tab-1");
let tab2 = document.querySelector("#tab-2");
let tab3 = document.querySelector("#tab-3");

let tab1Content = document.querySelector("#tab-1-content");
let tab2Content = document.querySelector("#tab-2-content");
let tab3Content = document.querySelector("#tab-3-content");


tab1.addEventListener ("click", () => {
    tab1Content.style.display = "block";
    tab2Content.style.display = "none";
    tab3Content.style.display = "none";
});

tab2.addEventListener ("click", () => {
    tab2Content.style.display = "block";
    tab1Content.style.display = "none";
    tab3Content.style.display = "none";
    
});

tab3.addEventListener ("click", () => {
    tab3Content.style.display = "block";
    tab1Content.style.display = "none";
    tab2Content.style.display = "none";
});