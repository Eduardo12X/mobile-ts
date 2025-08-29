import promptSync from "prompt-sync";
const prompt = promptSync();

const quan = Number(prompt("Quantos numeros voce vai digitar? "))
let numeros: number[] = [];

for (let i = 0; i < quan; i++) {
    let n = Number(prompt("Digite um numero: "))
    numeros.push(n)
}

console.log("Numeros negativos:")

numeros.forEach(num => {
    if (num < 0) {
        console.log(num)
    }
})