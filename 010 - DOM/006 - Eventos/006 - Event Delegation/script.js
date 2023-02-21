"use strict";

const menu = document.querySelector("#menu");

menu.addEventListener('click', (event) => {
    const { target } = event;
    const body = document.querySelector("body");
    switch (target.getAttribute ("class")) {
        case "home":
            body.style.background = "green";
        break;

        case "sobre":
            body.style.background = "yellow";
        break;

        case "contato":
            body.style.background = "red";
        break;
    };
});
/*
Estamos trabalhando com Event Delegation visando o ganho de performance
fazendo com que não precisemos criar vários event Listener.

Criamos um eventListener e pegamos o target, que é o target dentro do nosso
pai "menu", target é a LI, me dê um switch a partir do valor
target.getAttribute ("class")) o que vier da classe tem que ser igual
ao meu case home, sobre e contato e retorne algo

Estamos delegando ações de acordo com o nível do nosso pai a partir do target...id
attribute class

 */