// Projeto 01 simples de aprendizado em js gerador de números com conceito para sorteio da loteria.

// Explicação de como funciona um sorteio para loteria.
// https://www.caixa.gov.br/loterias/regras-sorteio/Paginas/default.aspx



const fs = require('fs');

//
function lerConfiguracoes() {
    try {
        const data = fs.readFileSync('config.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Erro ao ler o arquivo de configuração:', err);
        return null;
    }
}


function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function sortearMegaSena(quantidadeNumerosSorteados) {
    const numerosSorteados = [];
    while (numerosSorteados.length < quantidadeNumerosSorteados) {
        const numero = gerarNumeroAleatorio(1, 60);
        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }
    return numerosSorteados.sort((a, b) => a - b);
}


function gerarJogosMegaSena(quantidadeJogos, quantidadeNumerosSorteados) {
    const jogos = [];
    for (let i = 0; i < quantidadeJogos; i++) {
        const numerosPrincipais = sortearMegaSena(quantidadeNumerosSorteados);
        jogos.push(numerosPrincipais);
    }
    return jogos;
}


function exibirResultados(jogos) {
    jogos.forEach((jogo, index) => {
        console.log(`Jogo ${index + 1}: ${jogo.join(", ")}`);
    });
}


const configuracoes = lerConfiguracoes();

if (configuracoes) {
    const { quantidadeNumerosSorteados, quantidadeJogos } = configuracoes;
    const jogos = gerarJogosMegaSena(quantidadeJogos, quantidadeNumerosSorteados);
    exibirResultados(jogos);
}