"use strict";

const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener('click', (event) => {
    body.style.background = "blue";    
});


btn.addEventListener('mouseleave', (event) => { //mouseover
    body.style.background = "red";    
});