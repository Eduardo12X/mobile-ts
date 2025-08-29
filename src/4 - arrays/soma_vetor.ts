import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "))
const numeros: number[] = [];
let soma = 0;
let med = 0

for (let i = 0; i < n; i++) {
    let n = Number(prompt("Digite um numero: "))
    numeros.push(n)
    soma += n
}

med = soma / numeros.length
console.log(`Valores = ${numeros.join(" ")}` )
console.log(`Soma = ${soma.toFixed(2)}` )
console.log(`Media = ${med.toFixed(2)}` )