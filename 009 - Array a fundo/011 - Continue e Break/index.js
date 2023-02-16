//Continue faz com que o looping continua a buscar as informações
// O Break faz com que o looping pare de buscar quando encontra àquela informação

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
        nome: "Filipe 0",
        Sobrenome: "Jordão",
    },
    {
        nome: "Filipe 1",
        Sobrenome: "Jordão",
    },
    {
        nome: "Filipe 2",
        Sobrenome: "Jordão",
    },
    {
        nome: "Filipe 3",
        Sobrenome: "Jordão",
    },
    
];

for(let item of myArrayObj) {
    if(item.nome === "Filipe 0") {
        console.log("O Lipinho está fazendo bagunça");
        continue;
    }
    if(item.nome === "Filipe 2"){
        console.log("Filipe para!");
        break;
    }
    console.log(item);
}