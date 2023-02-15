
function Tenis (tamanho, estoque, preco) {
  
  return {
    tamanho,
    estoque,
    preco: preco,

  };
}
console.log(Tenis(41, true, "R$ 40,00"));

const tamanho = 41;
const estoque = true;
const preco = "R$ 40";

const Tenis2 = {
  tamanho,
  estoque,
  preco,
};
console.log(Tenis2);

// Métodos

const Tenis3 = {
  getTamanho() {
    return 41;
  },
};

console.log(Tenis3.getTamanho());
