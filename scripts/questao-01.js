const idades = [17, 21, 16, 25, 19];
let maioresDeIdade = 0;
let menoresDeIdade = 0;


// Laço de repetição para varrer os elementos do meu array idades
for (let i = 0; i < idades.length; i++){
    //Condição para contadores de maior e menor idade
    if (idades[i] >= 18) {
        maioresDeIdade++
    } else {
        menoresDeIdade++
    }
}

//enoresDeIdade = idades.length - maioresDeIdade;

console.log(`A quantidade de pessoas maiores de idades é: ${maioresDeIdade}`);
console.log(`A quantidade de pessoas menores de idades é: ${menoresDeIdade}`);


