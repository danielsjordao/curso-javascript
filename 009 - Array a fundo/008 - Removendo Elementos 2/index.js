/*
  slice = pega os dados dentro de um range sem quebrar o Array
  splice = remove os dados do Array dentro de um range
*/

let arr = [
  { nome: "Daniel", tel: "(99) 99999 9999" },
  { nome: "Mona", tel: "(99) 99999 9999" },
  { nome: "Amigo 1", tel: "(99) 99999 9999" },
  { nome: "Amigo 2", tel: "(99) 99999 9999" },
  { nome: "Amigo 3", tel: "(99) 99999 9999" },
];

console.table(arr);

arr.splice(0, 3);
console.log(arr.splice(4, 1));

// const newArray = arr.slice(0, 3);
// console.table(newArray);

console.table(arr);
