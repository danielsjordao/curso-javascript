let Tenis = {
    tamanho: 45,
    estoque: true,
};

delete Tenis.estoque;

console.log(Tenis);

// o delete exclui o item solicitado

// é possível tbm incluir novamente
Tenis.estoque = true;

console.log(Tenis);