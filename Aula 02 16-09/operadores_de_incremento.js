alert('Código Funcionando!') // mostrar uma mensagem para o usuário
const nomeUsuario = prompt('Olá, usuário, qual o seu nome?') // mostra uma mensagem e recebe um valor

let num = Number(prompt('Olá, ' + nomeUsuario + '. Digite algum número, por favor')) // 5
//console.log(typeof num) // typeof retorna o tipo do valor que a variável armazena

// operadores de incremento
//const sucessor = num++ // = num + 1 

// alert('O sucessor de ' + num + ' é ' + (num + 1))
console.log(num++)// 5 // operador de pós-incremento
console.log(num) // 6
console.log(++num) // 7 // operador de pré-incremento

// operadores de decremento
console.log(num--) // 7 // operador de pós-decremento
console.log(num) // 6
console.log(--num) // 5 // operador de pré-decremento