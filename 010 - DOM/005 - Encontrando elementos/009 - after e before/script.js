"use strict";

const container = document.querySelector(".container");

const newP = document.createElement("p");
newP.innerText = "Olá Daniel";

const newP2 = document.createElement("p");
newP2.innerText = "Olá Filipe"

container.after(newP); //Será adicionado ao final da DIV
container.before(newP2) //Será adicionado do container