# Sorteador de Números da Mega Sena

Este é um projeto simples de um sorteador de números da Mega Sena em JavaScript. Ele permite configurar o número de números a serem sorteados e quantos jogos diferentes você deseja gerar.

## Pré-requisitos

Certifique-se de ter o Node.js instalado para executar este projeto. Você também precisará do arquivo `config.json` para configurar as opções do sorteio.

## Configuração

No arquivo `config.json`, você pode definir as seguintes configurações:

- `quantidadeNumerosSorteados`: O número de números a serem sorteados em cada jogo da Mega Sena.
- `quantidadeJogos`: A quantidade de jogos diferentes a serem gerados.

Exemplo de configuração:

```json
{
  "quantidadeNumerosSorteados": 6,
  "quantidadeJogos": 1
}
```