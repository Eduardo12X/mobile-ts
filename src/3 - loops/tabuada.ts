import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Deseja a tabuada para qual valor? "))

for (let i = 0; i <= 10; i++) {
    console.log(`${n} X ${i} = ${n * i}`)
}