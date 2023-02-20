"use strict";

const h1 = document.querySelector("h1");
const p = document.querySelector(".paragrafo");

console.log(p.previousSibling); // pegará o texto espaço ao final do h1 e p
console.log(p.previousElementSibling); // pegará o H1 // se buscarmos o element H1 ele dará null pq não tem irmão antes dele