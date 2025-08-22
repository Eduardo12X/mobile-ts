import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("Digite dois números:")
let n1 = Number(prompt(""))
let n2 = Number(prompt(""))

while (n1 != n2) {
    if (n1 > n2) {
        console.log("Decrescente!")
    }
    else {
        console.log("Crescente")
    }
    console.log("Digite outros dois números:")
    n1 = Number(prompt(""))
    n2 = Number(prompt(""))
}