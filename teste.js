function comparaNumeros(num1, num2) {
    const primeiraFrase = criaprimeiraFrase(num1, num2);
    const segundaFrase = criasegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaprimeiraFrase(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = "não";
    }

    return `os numeros ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criasegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = `menor`;
    let resultado20 = `menor`;

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = `maior`
    }

    if (compara20) {
        resultado20 = `maior`;
    }

    return `sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(7, 8))
