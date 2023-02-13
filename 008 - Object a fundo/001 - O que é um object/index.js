/*
  Objeto: Tenis (Propriedade) "cadarço", "palmilha"
  Objeto: Celular (Propriedade)
  Objeto: Drone (Propriedade)
  Propriedades / Atributos / Funcionalidades
*/

let Tenis = {
    tipo: "Tênis de corrida",
    cardarco: "G",
    estoque: false,
    tamanho: {
        palmiha: 41,
        tenis: 41,
        caixa: {
            altura: 25,
            largura: 30,
            profundidade: 40,
        },
    },
    marcaArrayValores: ["Nike", "Adidas", "Asics"],
    marcaArrayObj: [
        {
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },
        {
            nome: "Asics",
        },
    ],
    getMarcaArrayValores: function (param) {
        return this.marcaArrayValores[param];
    },
    getMarcaArrayObj: function (param) {
        return this.marcaArrayObj[param];
    },
};

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);