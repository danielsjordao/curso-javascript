"use script"

// como encontrar elementos no HTML utilizando JS
//Aprenderemos como pegar o primeiro elemento Filho

const container = document.querySelector(".container");

//console.log(container.firstChild); // pega o text espaço (final do container e início do H1)
console.log(container.firstElementChild); // pega o primeiro elemento filho H1
