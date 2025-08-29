import promptSync from "prompt-sync";
const prompt = promptSync();

let pessoas = Number(prompt("Quantas pessoas serao digitadas? "));
let nomes: string[] = []
let idades: number[] = []
let alturas: number[] = []
let menores: string[] = []
let menor = 0
let somaAlt = 0

for (let i = 0; i < pessoas; i++) {
    console.log(`Dados da ${i + 1}a pessoa`)
    let nome = prompt("Nome: ")
    let idade = Number(prompt("Idade: "))
    let altura = Number(prompt("Altura: "))

    nomes.push(nome)
    idades.push(idade)
    alturas.push(altura)

    if (idade < 16) {
        menores.push(nome)
        menor++
    }
    somaAlt += altura
}

let menoridade = (menor / pessoas) * 100
let med = somaAlt / pessoas
console.log("")
console.log(`Altura media: ${med.toFixed(2)}`)
console.log(`Pessoas com menos de 16 anos: ${menoridade.toFixed(1)}%`)

menores.forEach((menorNome) => {
    console.log(menorNome)
})
