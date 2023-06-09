/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (name, age) => {
  // eslint-disable-next-line no-bitwise
  if ((typeof name !== 'undefined') && (typeof age !== 'undefined')) {
    let message1 = `Oi, meu nome é ${name}!\nTenho ${age} anos,\n`;
    let message2 = 'trabalho na Trybe e mando muito em programação!\n#VQV!';
    return `${message1}${message2}`;
  }
};

module.exports = vqv;
