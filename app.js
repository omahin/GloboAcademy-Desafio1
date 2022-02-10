const livros = require('./database')

livros.sort((a,b) => a.paginas - b.paginas)

const pegarEntrada = require('readline-sync')

const buscarLivrosPorCategoria = pegarEntrada.question('Voce deseja ver livros por categoria?(S/N)')

if(buscarLivrosPorCategoria.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Psicologia', 'Psicanálise', 'Poesia', 'Ficção contemporânea', 'Drama', 'Auto ajuda',
    'Transformação pessoal', 'Social', 'Biografia');
    const qualCategoria = pegarEntrada.question('Qual categoria voce gostaria de escolher?')
    const categorias = livros.filter(livro => livro.categoria === qualCategoria)
    console.log(categorias) 
} else {
    console.log('Esses sao todos os livros cadastrados:')
    console.table(livros)
}

const livrosRecomendados = pegarEntrada.question('Voce deseja recomendacoes de leitura?')

if(livrosRecomendados.toLocaleUpperCase() === 'S') {
    console.log('Essas sao nossas sugestoes:')
    const recomendados = livros.filter(livro => livro.recomenda === "True" && livro.leu === "True")
    console.table(recomendados) 
} else {
    console.log('Que pena! Abaixo estao todos os livros cadastrados, boa escolha e boa leitura!')
    console.table(livros)
}

const wishlist = pegarEntrada.question('Voce gostaria de formar uma wishlist para proximas leituras?')

if(wishlist.toLocaleUpperCase() === 'S') {
    console.log('Esses sao os livros ainda nao lidos:')
    const desejos = livros.filter(livro => livro.leu === "False")
    console.table(desejos)
} else {
    console.log('Esses sao todos os livros cadastrados::')
    console.table(livros)
}