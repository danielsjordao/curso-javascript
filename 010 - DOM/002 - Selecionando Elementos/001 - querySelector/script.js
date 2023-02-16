'use strict';

// Retorna a primeira Tag no querySelector("SUA TAG AQUI")
const h1 = document.querySeletor ("h1"); // TAG HTML5
const classP = document.querySelector(".paragrafo"); //classe representada pelo "." qdo for alguma inclusão única pode ser inserida aqui, caso contrário deverá inserir no console.log
const idP = document.querySelector("#paragrafo"); // sustenido "#" representa ID serve para HTML e CSS

console.log(h1);
cosole.log(classP);
console.log(idP);


let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
  title.innerText = timer;
  timer++;
}, 1000);

//InnerText significa o texto que está dentro da sua TAG