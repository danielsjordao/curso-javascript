"use strict";

//  Vamos encontrar um elemento e inserir um item antes desse elemento
// exemplo tenho uma DIV class=container e tenho um H1 e quero inserir 
// algo antes do H1 ou um item antes do .paragrafo

const container = document.querySelector(".container");
const paragrafo = document.querySelector(".paragrafo");
const h1 = document.querySelector("h1");

const newH2 = document.createElement("h2");
newH2.innerText = "Novo H2";

container.insertBefore(newH2, h1);