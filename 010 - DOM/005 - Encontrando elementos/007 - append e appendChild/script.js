"use strict";

const container = document.querySelector(".container");

//container.append("Olá Daniel"); // Vai analisar o último elemento e vai inserir o texto

const newDiv = document.createElement('div'); // criamos um elemento
newDiv.innerHTML = "Olá Daniel"; // Adicionamos um valor ao elemento	
container.appendChild(newDiv) // chamamos o elemento que queremos que adicione no HTML

// append : Inserção de textos
//appendChild : Inserção de elementos dentro do DOM a partir de querySelector