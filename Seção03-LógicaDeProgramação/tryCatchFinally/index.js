try {
    // É executado quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechou o arquivo');

    try {
        console.log(b);
    } catch (e){
        console.log('Deu erro');
    } finally {
        console.log('Também sou finally');
    }

} catch (e) {
    // É executado quando há erros
    console.log('Tratando o erro');
} finally {
    // É executado sempre
    console.log('FINALLY: Eu sempre sou executado');
}