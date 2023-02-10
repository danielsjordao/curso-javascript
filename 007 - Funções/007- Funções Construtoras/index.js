function Name(name, lastname) {
    this.name = name;

    this.lastName = () => {
        const fullName = `${this.name} ${lastname}`;
        return fullName;
    }
}

const daniel = new Name("Daniel", "Jordao");

console.log(daniel.lastName());



function Calculadora () {
    this.soma = ( num1, num2) => {
        return `${num1 + num2}`;
    };

    this.subtracao = ( num1, num2) => {
        return `${num1 - num2}`;
    };    
}

const calculadora = new Calculadora();

console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(10, 5));