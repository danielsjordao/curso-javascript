// IIFE = Immediately Invoked Function Expression
//IIFE = Expressão de função Invocada Imediatamente
/*A IIFE vai se auto-invocar quando o código carregar, ela não precisa aguardar a função
Ao criá-la ela se torna semelhante a um método Private
*/

(function (num1, num2) {
    const calc = num1 + num2;
    console.log(calc)
})(1, 2);

// ou

(() => {
    console.log(123);
})();

