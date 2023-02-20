"use strict";

const container = document.querySelector(".container");

console.log(container.children); // HTMLCollection não pode ser iterado
console.log(container.childrenNodes); //NodeList pode ser iterado, mas vem com os espaços

// para usar o children convertemos em um Array e é possível iterá-lo
const children = Array.from(container.children);

// console.log(children);

children.forEach((res) => {
    console.log(res);
});