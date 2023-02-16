// foreach serve para iterar os valores de um Array
// o break e continue não funcionam com o foreach

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

myArrayObj.forEach((item, index) => {
    if (item.nome === "Filipe"){
        return console.log("O Lipinho está estudando");
    }
    console.log(index, item.nome);
});