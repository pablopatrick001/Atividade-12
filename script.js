// Selecionando elementos e criando novos elementos
const header = document.querySelector('#page-header');
const main = document.querySelector('#page-main');

const h1Title = document.createElement('h1');
h1Title.textContent = 'Atividade 12';
header.appendChild(h1Title);

const div1 = document.createElement('div');
const h2Title1 = document.createElement('h2');
h2Title1.textContent = 'Conteúdo 1: Mini-história';
const p1 = document.createElement('p');
p1.textContent = 'Numa pequena cidade à beira-mar, vivia um pescador chamado Miguel. Todos os dias, antes do amanhecer, ele saía para o mar em seu barco, acompanhado apenas pelo som das ondas e pelo farol distante. Um dia, enquanto lançava sua rede, Miguel avistou algo brilhante entre as águas. Ao puxar a rede, encontrou um objeto misterioso: um mapa antigo com instruções para um tesouro perdido. Animado, Miguel decidiu embarcar em uma aventura que o levaria por recifes perigosos, cavernas secretas e, finalmente, a um tesouro escondido por gerações. No final, ele descobriu que o verdadeiro tesouro não estava no ouro e nas joias, mas nas histórias e experiências que ele acumulou ao longo do caminho.o 1';
div1.appendChild(h2Title1);
div1.appendChild(p1);

const div2 = document.createElement('div');
const h2Title2 = document.createElement('h2');
h2Title2.textContent = 'SIGA';
const p2 = document.createElement('p');
p2.textContent = 'Num rincão escondido, onde o verde se mistura em tons incontáveis, a natureza revela sua maestria. Cada folha, uma tela para a dança do vento, e cada raio de sol, um pintor que derrama sua luz dourada sobre a paisagem.'
div1.appendChild(h2Title2);
div2.appendChild(p2);

main.appendChild(div1);
main.appendChild(div2);
