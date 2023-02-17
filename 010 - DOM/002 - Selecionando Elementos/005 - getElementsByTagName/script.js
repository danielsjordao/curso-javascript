"use strict";

//getElementsByTagName : Buscará todas as Tags (p, strong, div, section) e retornará no HTML Collection
// não consegue puxar por classe ".paragrafo" nem por ID "#paragrafo" "."
const p = document.getElementsByTagName("p");

console.log(p);

for(let element of p){
    console.log(element);
}

