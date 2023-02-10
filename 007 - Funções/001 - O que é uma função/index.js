/*
    O que é uma função?
        É um conjunto de instruções que executa uma tarefa ou calcula um valor.
*/

// 1 - Functions declarations
// o nome da function o programador decide, a depender da function nos parenteses terão argumentos e teremos as chaves que inseriremos o bloco de códigos

function isValidDeclaration(){
    const soma = 1 + 2;

    if (soma === 3){
        return true;
    }
    return false;
}
//console.log (isValidDeclaration());

// 2 - Functions expressions
const isValidExpression = function(){
    return false;
}
//console.log(isValidExpression());

// 3 - Arrow Functions : pode ser feita tbm por bloco
const isValidArrow = () => 2 * 2;
//const isValidArrow = () => {
//    const multiplicacao = 2 * 2;
//    return multiplicacao;
//};
console.log(isValidArrow());
