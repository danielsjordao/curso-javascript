'use strict';

const p = document.getElementsByClassName("paragrafo");

console.log(p);

for (let element of p){
    console.log(element);
}

// getElementsByClassName: pega todas as classes no HTML e retornar no HTML Colection, a partir disso poderá iterar com o FOR