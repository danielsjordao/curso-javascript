const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
    {
        nome: "Daniel",
        Sobrenome: "Jordão",
    },
    {
        nome: "Monalise",
        Sobrenome: "Jordão",
    },
    {
        nome: "Filipe",
        Sobrenome: "Jordão",
    },
];

// for ([inicialização] ; [condição]; [expressão final];

// no Array onde tem os colchetes pode concolocar a numeração que seria a chave do
// do assessor do nosso valor console.log(myArray[0]) será o número 1
for (let i = 0; i < myArrayObj.length; i++) {
    console.log(myArrayObj [i].Sobrenome, myArrayObj [i]. nome);
}

// for Of
// for of torna-se a sintaxe mais simples não precisando mencionar o "i"

for(let item of myArray){
    console.log(item);
}

//for In : é legal trabalhar com objeto e não com Array

const obj = {nome: "Daniel", sobrenome: "Jordão"};

for(let item in myArrayObj){
    console.log(item);
}




