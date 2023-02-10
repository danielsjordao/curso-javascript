console.log(123);
console.log(Number("123") +1); //soma number

console.log("***************");

console.log(typeof Number("123")); //number
console.log(typeof "123"); // string

/*
Forma correta de usar
Number 123
Number 123 + 123 = 246
Number("123") - 1 = 122

Cuidado que assim pode gerar Bugs
Number"123" - 1 = 122
Number "123" * 2 = 246

*/