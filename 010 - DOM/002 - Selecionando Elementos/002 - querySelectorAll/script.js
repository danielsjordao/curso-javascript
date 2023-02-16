"use strict";

// Retorna todos os elementos em um NodeList no formato Array
// [ todos os p, dentro de um Array ]
// NodeList [p.paragrafo, p#paragrafo]
// document é o documento do HTML "DOCTYPE"

const p = document.querySelectorAll("p");

p.forEach((element, index) => {
    element.style.color = "#FFFFFF";
    element.style.padding = "1.25rem"

    if (index === 0){
        element.style.background = "blue";
    }
    if (index === 1){
        element.style.background = "red";
    }
    console.log(index, element);
})
