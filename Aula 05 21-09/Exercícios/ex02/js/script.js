/**
 * Fórmula
 * 
 * homens = (72.7 * h) - 58
 * mulheres = (62.1 * h) - 44.7
 */


/*
let msg = `
Digite a opção:
M - Mulher
H - Homem
`

let sexo = prompt(msg).toUpperCase
let altura = parseFloat(prompt('Inform a sua altura: ')).toFixed(2)

const pesoIdeal = sexo == 'H' ? alert(`O seu peso ideal é ${((72.7 * altura)- 58)}`) :
alert(`O seu peso ideal é ${((62.1 * altura)- 44.7)}`)

*/


//Fómrmula imc = peso / altura **2

let peso = parseFloat(prompt('Qual o seu peso: ')).toFixed(2)
let altura = parseFloat(prompt('Qual a sua altura: ')).toFixed(2)
let imc = (peso / (altura**2)).toFixed(2)

if(imc < 18.5){
    alert(`O seu imc é: ${imc}. Você está abaixo do peso`)
}else if(imc >= 18.5 && imc <= 25){
    alert(`O seu imc é: ${imc}. Peso normal`)
}else if(imc > 25 && imc <= 30){
    alert(`O seu imc é: ${imc}. Acima do peso`)
}else if(imc > 30){
        alert(`O seu imc é: ${imc}. Obeso`)
}