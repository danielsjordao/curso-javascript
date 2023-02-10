const velocidade = 75;
const warn = 85;

const condicao = velocidade >= warn  
? console.log ("Recebu uma Multa!")
: console.log ("Continua andando!");


if(velocidade >= warn){
    console.log ("Recebu uma Multa!");
} else {
    console.log ("Continua andando!");
}

/*
    Operador Ternário
    Condição 
    ? true
    : false
*/