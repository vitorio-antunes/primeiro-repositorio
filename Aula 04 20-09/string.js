// Delimitação de strings

const aspasSimples = 'Olá, mundo'
//console.log(aspasSimples)

// Caracteres de escape

const aspasDuplas = "Olá eu sou o Javascript. Eu sou melhor que o Python"
//console.log(aspasDuplas)

//String com crase é possivel fazer quebra de linha sem o \n e concatenação ${}
const textoComCrase = "Olá eu sou o Javascript. Eu sou melhor que o Python"
//console.log(textoComCrase)

// método das strings

const texto = "O Javascript foi criado alguns anos após o python, o Javascript é bem mais bacana."

//console.log(texto)
//console.log(texto.toUpperCase())
//console.log(texto.toLowerCase())
//console.log(texto.concat('A linguamgem C é a mãe de todas as linguagens.'))
//console.log(texto[5], texto[17])
//console.log(texto.substring(2, 11))
//console sensitive
//console.log(texto.replace('Javascript','Rust'))//substitui a primeira ocorrencia da pesquisa
//console.log(texto.replaceAll('Javascript','Kotlin'))//substitui todas as ocorreias 
//console.log(texto.replace(/Javascript/g,'PHP'))
//console.log(texto.replace(/Javascript/gi,'PHP'))

const html = '<!DOCTYPE hmtl>\n<html>'

console.log(html.startsWith('<!DOCTYPE hmtl>'))
console.log(html.startsWith('batata'))

console.log(html.endsWith('</body>'))

const mensagem = "                             Olá, mundo!               "
console.log(mensagem)
console.log(mensagem.trim()) //remove apenas espaços 

let senha = 'html-css'

console.log(senha.length) //contabiliza os caracteres 
console.log(senha.length >= 8)
console.log(senha.length <= 8)
console.log(senha.length = 8)

/**
 * Concatenação
 */
