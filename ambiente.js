function cadastrarLivro(titulo, autor, editora) {
    return {
        titulo,
        autor,
        editora,
        eUsado() {
            console.log('Verificando se o livro é novo ou usado...');
        }
    }
}

const livro = cadastrarLivro('Dom Casmurro e os discos voadores', 'ASSIS, Machado de; MANFREDI, Lúcio', 'Lua de Papel');
console.log(livro);
livro.eUsado();