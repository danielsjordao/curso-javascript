"use strict"

const container = document.querySelector(".container");
const p = document.querySelector(".paragrafo");

console.log(p.lastChild); // pega o espaço anterior ao strong
console.log(p.lastElementChild); // pega o elemento strong