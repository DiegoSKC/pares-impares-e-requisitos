function somaDigitos(numero) {
    let soma = 0;
    let digitos = numero.toString();

    for (let i = 0; i < digitos.length; i++) {
        soma += parseInt(digitos[i], 10);
    }

    return soma;
}

function parOuImpar(numero) {
    let soma = somaDigitos(numero);

    if (soma % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log(parOuImpar(123));   
console.log(parOuImpar(456));   
console.log(parOuImpar(7890));  
