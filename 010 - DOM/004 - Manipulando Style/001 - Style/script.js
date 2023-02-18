"use script"

const h1 = document.querySelector("h1");

//no css font-family: "arial"
h1.style.fontFamily = "Arial";
h1.style.color = "blue";

const p = document.querySelector("p");

p.forEach((element) => {
    element.style.fontFamily = "Arial";
    element.style.fontSize = ".75rem";
});

