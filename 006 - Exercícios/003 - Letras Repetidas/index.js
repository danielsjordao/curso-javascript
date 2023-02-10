/*
  Precisamos mostrar quantas letras repetiras aparecem em uma palvra
  exp.: Abacate = { a: 3, b: 1, c: 1, t: 1, e: 1 }

  .length conta qtos itens tem dentro de uma palavra, por exemplo, abacate, 7 letras.
*/



const palavra = "Abacate".toLowerCase(); //.replaceAll(" ", "") será utilizado quando have mais de uma palavra
let letras = {}
// qdo i chegar na última letra da palavra ela vai parar
for(let i = 0; i < palavra.length; i++) {
    if(letras[palavra[i]]){
        letras[palavra[i]]++;
    }else{
        letras[palavra[i]] = 1;
    }    
}

console.log(letras);
