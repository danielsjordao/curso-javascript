"use strict"

//faz parte do nó do objeto do DOM, porém não está na árvore de criação. Está separado.
// Função principal: Criar um fragmento do documento e anexar os novos elementos ao fragmento e depois anexar o fragmento ao nosso documento principal.

//Exemplo
// DOM [Principal]
//FragmentDom [Secundário for a do DOM principal] ele fica na memório, mas não no DOM principal proporcionando que o carregamento fique melhor e mais rápido

const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();

const lanches = ['lanche 1', 'lanche 2', 'lanche 3', 'lanche 4'];

lanches.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    fragment.append(li);    
});

console.log(fragment);
ul.append(fragment);

/* 
Resumo
Criamos uma UL no HTML, depois criamos um const ul = document.querySelector("ul");
eu estou pegando os dados da minha UL depois criei o const fragment = document.createDocumentFragment();
trata-se de um documento apartado do nosso principal, ele está consumindo memória, mas não está no nosso HTML jogando memória nele por enquanto.
Em seguida, criamos um Array de Lanches, e inserimos um forEach para acessar os dados, após isso criamos o forEach element, o element seria cada nó de nosso Array
Cria uma const li e um document.createElement("li"), sempre que passa, cada nó que ele passa ele cria um elemento li, toda vez que iterar o forEach
ele criará um elemento novo. Ai eu falo li.textContent ou innerText = element, ele está adicionando os nosso elementos aqui, lanche 1, lanche2, lanche 3...nesse espaço.
No primeiro bloco, vc vai pegar o documento, seu fragmento do seu documento e vai falar olha, adiciona a minha li nesse fragmento, ele vai passar de novo, vai fazer 
tudo que tem aqui e adicionar mais uma (li) até chegar no número 4.
Ao invés de fazer o processo de adicionar direto na tela, ele adicionará tudo no fragmento, na nossa variável, no arquivo fragmentado que é criado no JS e 
lá terá a memória dele não atrapalhando o usuário.
E ai quando ele for adicionar, não ficará adicionando toda hora, ao final como está salvo ele vai falar UL adiciona ai todos os meus fragmentos ai a UL vai aceitar.
Esse processo em si proporciona o ganho de performance e produtividade. 

*/