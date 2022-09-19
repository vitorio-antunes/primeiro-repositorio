





// V -> Verdadeiro
// F -> Falso

/**
 * V V -> V
 * F V -> F
 * V F -> F
 * F F -> F
*/

// média precisa ser maior ou igual a 7 e preciso, ter, no mínimo, 80% de presença

const media = (7 + 10 + 10) / 3
const presenca = 0.95

console.log(media >= 7 && presenca >= 0.8) //true

//&& Significa e 

//Operador Ou

/**
 * V V -> V
 * F V -> V
 * V F -> V
 * F F -> F
*/

console.log(4 > 7 || 3 < 2) //false
console.log(5 > 3.5 || 7 > 8) //true

// || siginifica ou

const estado = 'MG'

console.log(estado == 'SP' || estado == 'MG')

const idade = 15

//console.log(idade >= 16 || idade <60)

//operador Não 

/**
 * NOT V -> F
 * NOT F -> V
 */

const resultado = 5 < 3 

console.log (!resultado) //true
console.log(!true)
console.log(!false)

const logado = false

if (estalogado == ) {
    console.log('você não pode acessar meu site, saia daqui')
}
// ! significa não, voce esta negando 