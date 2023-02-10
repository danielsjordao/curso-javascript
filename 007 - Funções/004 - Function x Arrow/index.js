/*
  1 - Nome de função
  2 - Retorno
  3 - Não tem Hoisting
  4 - Arguments
*/

// 1 - Nome de função function
function nomeFunc(){
    return "Daniel Jordao";
}
console.log(nomeFunc());

// 1 - Nome de função Arrow
const nomeFuncArrow = () =>{
    return "Daniel Jordao"
};
console.log(nomeFuncArrow());

//2 - Retorno
const nomeFuncArrowReturn = () => "Daniel Jordao"
console.log(nomeFuncArrowReturn());

//3 - Não tem Hoisting
const nomeFuncArrowHoisting = () => {
    return "Daniel Jordao"
};
console.log(nomeFuncArrowHoisting ());

//4 - Arguments
/* 
Com Arrow function não funciona e dá vários erros
const nomeFuncArrowArguments = () =>{
    return arguments;    
};
console.log(nomeFuncArrowArguments());
*/
function nomeFuncArguments(){
    return arguments;
}

console.log(nomeFuncArguments("Daniel Jordao"));

const nomeFuncArrowParams = (param) => param;

/* 
  5 - Não pode ser invocada com New
*/
/* Com Arrow Function o new não pode ser instanciada pq precisa de um método constructor 
function newFunc(){
    return console.log(123);
}
new newFunc();

const newFuncArrow = () => {
    return console.log(123);
};

new newFuncArrow(); */

/* 
  6 - Contexto
  Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.
  
  Isso significa que arrow functions herdam o contexto local de onde foi declarado, 
  enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado 
  no momento da chamada 
  Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente 
  como o contexto global, que no caso dos navegadores é window
*/
//this referencia o objeto pai "lanches" na function
//this no método func ele pega o contexto global
// function pga o contexto global ou do seu pai, neste caso o contexto lanches e não está saindo

const lanches = {
    cardapio: [
        {Lanche: "X-Bacon", Preço: "R$ 25,00" },
        {Lanche: "X-Egg", Preço: "R$ 20,00" },
    ],

    meuPedidoFunc: function (select) {
        return console.log(this.cardapio[select]);
    },
    /*
    this vai pegar a herança de seu pai "setTimeout" e não pegará nada de fora
    */
    meuPedidoFuncTimeOut: function(){
        setTimeout(function(){
            console.log(this.cardapio);
            console.log(this);
        }.bind(this),
        1000
        );
    },

    meuPedidoArrowFunc : (select) => {
        this.cardapio = [
            {Lanche: "X-Bacon", Preço: "R$ 25,00" },
            {Lanche: "X-Egg", Preço: "R$ 20,00" },
        ];
        return console.log(this.cardapio[select]);    
    },    
};

lanches.meuPedidoFunc(0);
lanches.meuPedidoArrowFunc(0);
lanches.meuPedidoFuncTimeOut(0);

// neste caso o Arrow Function não conseguem buscar outro parâmetro a não ser o dele, 
//sendo assim é necessário criar o contexto dele.
//contexto interno

/*
  7 - Constructor
  Arrow functions não podem ser constructors, então não é possível usar o operador 
  new com a mesma.
*/

class newFunc {
    constructor(nome) {
        this.nome = nome;
    }
}

const a = new newFunc ("Daniel Jordao");
console.log(a.nome);