//function soma(num1, num2) {
//    if(typeof num1 === "number" && typeof num2 === "number"){
//        return num1 + num2;
//    }
    
//    return "Você passou parâmetros diferentes"
//}

//console.log(soma(soma(1, 4), soma(1, 4)));

//function subtracao(){
//    return arguments;
//}

//console.log(subtracao(1, 2, "abc"));
//Resp [Arguments] { '0': 1, '1': 2, '2': 'abc' }

const subtracao = (num1 = 0, num2 = 0) =>{
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 - num2;
    }

    return "Você passou dados diferentes";
}

console.log(subtracao(1, 2));