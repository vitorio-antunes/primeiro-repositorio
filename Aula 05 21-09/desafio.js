/**Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10%
*/
/**
*--> Métodos de pagamento
* * Em dinheiro
* * Em cheque
* * No cartão
*/
// recebebndo o preço do produto e transfromando para decimal
const precoProduto = parseFloat(prompt('Qual o preço do produto? '))
const mensagem = `
Informe o método de pagamento: 
Digite 1  Pagamento em dinheiro
Digite 2  Pagamento em cheque
Digite 1  Pagamento em cartão
`

const metodoDePagamento = prompt($mensagem)

console.log(metodoProduto)
console.log(metodoDePagamento)

/**
 * Se o valor da constante 'metodoDePagamento' for 1 ou 2, significa que a pessoa 
 * *possuirá um desconto de 10%
 */

if (metodoDePagamento == 1 || metodoDePagamento == 2) {
    const precoFinal = precoProduto * 0.9
    alert(`O preço final do pagamento é ${precoFinal} reais`)
} else if (metodoDePagamento == 3) {

    /**
     * 1 parcela = 15% de desconto
     * 2 parcela = preço do produto
     * 3 ou mais parcelas = acréscimo de 10%
     */

    const parcelas = parseInt(prompt('Informe a quantidade de parcelas'))

    if (parcelas == 1) {
        const precoFinal = precoProduto * 0.85
        alert(`O preço final do pagamento é ${precoFinal} reais`)
    } else if (parcelas == 2) {
        alert(`O preço final do pagamento é ${precoProduto} reais`)
    } else if (parcelas >= 3) {
        const precoFinal = precoProduto * 1.1
        alert(`O preço final do pagamento é ${precoFinal} reais`)
    }
}