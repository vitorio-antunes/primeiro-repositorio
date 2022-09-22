/**
 * 1 litro gasolina = R$ 2.70
 * 1 litro álcool = R$ 1.90
 */


let litros = parseFloat(prompt('Informe o litros: '))
const precoGasolina = 2.70
const precoAlcool = 1.90

let msg = `
Digite uma opção:
A - Álcool
G - Gasolina`


let tipoCombustivel = (prompt(msg))

if(tipoCombustivel == 'A' || tipoCombustivel == 'a'){

    if(litros <= 25){
        const precoFinal = (litros * precoAlcool) - (litros * 0.2)
        alert(`Total à pagar é: ${precoFinal.toFixed(2)}`)

    }else if(litros > 25){
        const precoFinal = (litros * precoAlcool) - (litros * 0.4)
        alert(`Total à pagar é: ${precoFinal.toFixed(2)}`)
    }else{
        alert('Erro no sistema')
    }
}else if(tipoCombustivel == 'G' || tipoCombustivel == 'g'){

    if(litros <= 25){
        const precoFinal = (litros * precoGasolina) - (litros * 0.3)
        alert(`Total à pagar é: ${precoFinal.toFixed(2)}`)

    }else if(litros > 25){
        const precoFinal = (litros * precoGasolina) - (litros * 0.5)
        alert(`Total à pagar é: ${precoFinal.toFixed(2)}`)
    }else{
        alert('Erro no sistema')
    }

}else{
    
    alert('Valor inválido')
}