import promptSync from "prompt-sync";
const prompt = promptSync();

const base = Number(prompt("Digite a base do retângulo: "))
const altura = Number(prompt("Digite a altura do retângulo: "))

const area = base * altura
const perimetro = (base + altura) * 2
const diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2)) // Sqrt: Faz a raíz quadrada

console.log(`Área = ${area.toFixed(4)}`)
console.log(`Perimetro = ${perimetro.toFixed(4)}`)
console.log(`Diagonal = ${diagonal.toFixed(4)}`)