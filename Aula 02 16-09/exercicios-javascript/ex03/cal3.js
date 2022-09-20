let raio = Number(prompt("Digite o raio da circuferência: "))
let diametro = Number(prompt("Digite o diâmetro: "))
const pi = 3.14159
let area = Math.round(pi*raio**2) //fórmula a = pi*r**2
let perimentro = diametro*raio  // fórmula p = 2*pi*r ou p = d*r

alert("A área da circuferência é: " + area)
alert("O valor do perímetro é: " + perimentro)