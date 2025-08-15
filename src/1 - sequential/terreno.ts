import promptSync from 'prompt-sync'
const larg = Number(prompt("Digite a largura do terreno:"))
const comp = Number(prompt("Digite o comprimento do terreno:"))
const vlm2 = Number(prompt("Digite o valor do metro quadrado:"))

const area = larg * comp
const preco = area * vlm2

console.log(`Area do terreno = ${area.toFixed(2)}`)
console.log(`Preco do terreno = ${preco.toFixed(2)}`)