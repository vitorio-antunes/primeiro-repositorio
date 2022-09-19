/**
 * Operadores de comparação
 */

// verdadeiro (true) or (false)

// igualdade
const msg = "Eu sou uma mensagem!"
const msg2 = "Eu sou outra mensagem!"

console.log(msg == msg2) //false

const num=5
const num2=5 

console.log(num==num2)

let a = 6 //number
let b = '6' //string

//igualdade
//no Js a linguagem comparara o conteudo da variavel e não o tipo
console.log(typeof a)
console.log(typeof b)

console.log(a==b) //true

//Identicos
//para serem verdadeiramente identicos é nescessario que tanto o *conteudo* quanto o *tipo* sejam iguais

console.log(a === b) //false

//diferença

console.log(msg != msg2) //true 
console.log(a != b) //false compara apenas o conteudo
console.log(a !== b) //true compara o tipo e o conteudo 

a = 56
b = 30
let c = 500
let d = 500

console.log(a>b) //true
console.log(b<a) //false
console.log(c>=d) //true
console.log(c<=d) //true

console.log(3<7.5) //true
console.log(7.5<7.5) //false
console.log(8<=8) //true

