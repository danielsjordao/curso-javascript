"use strict";

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Evento Prevenido");
});

//PreventDefault é para previnir alguma ação do HTML, ele vai previnir
// o evento Default da Tag específica.
/*
Cancela o evento se for cancelável, sem parar a propagação do mesmo.

Chamar preventDefault durante qualquer fase do fluxo de eventos cancela o evento, 
o que significa que qualquer ação padrão normalmente feita pela aplicação como um 
resultado do evento não ocorrerá.
*/