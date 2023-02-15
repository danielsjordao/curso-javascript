// const não permite adicionar ou alterar nada, é uma constante.
// já a let (variável) permite adicionar ou excluir um item de um Array

let Tenis = {
    tamanho: 45,
    estoque: true,
};

Tenis.tamanho = 42;
Tenis.estoque = false;
Tenis.preco = "R$ 30,00";
Tenis['preco'] = "R$ 30,00";

console.log(Tenis);
console.log(Tenis['preco']);


