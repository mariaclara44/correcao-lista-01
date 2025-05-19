const temperaturasCelcius = [0, 10, 20, 30, 40];
const temperaturasFahrenheit = [];
let contadorArrayFahrenheit = 0;


// Fórmula: F = C * 9/5 + 32

// Varredura do array com laço de repetição
for (let i = 0; i < temperaturasCelcius.length; i++) {
    temperaturasFahrenheit[contadorArrayFahrenheit] = (temperaturasCelcius[i] * 9) / 5 + 32;
 contadorArrayFahrenheit++;
   
}

console.table(temperaturasCelcius)
console.table(temperaturasFahrenheit)
