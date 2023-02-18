"use strict";

const strong = document.querySelector("strong");
const p = document.querySelector(".paragrafo");
const container = document.querySelector(".container");
const body = document.querySelector("body");

console.log(p.parentElement); // Retorna o pai do Elemento
console.log(p.parentNode); //Retorna o pai
// Ambos retornam a mesma informação é que no passado um foi criado para determinado browser.
