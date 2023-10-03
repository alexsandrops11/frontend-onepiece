/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 
*/




// OBJETIVO 1 - passo 1
// console.log(document);
// console.log(document.getElementById("chooper"));
// const é uma variável constante que não reatribui, normalmente a q mais usa pq não reatribui
// let pode reatribuir a variável, o var é usado em ultimo caso
// const botao = document.getElementById("chooper")
const botoes = document.querySelectorAll(".botao");



//OBJETIVO 2 
const personagens = document.querySelectorAll(".personagem");
// console.log(personagens);

// add event listener apenas em 1 elemento não em lista, por isso precisa do lopping
botoes.forEach( (botao, index) => {
    // console.log(botao);
    botao.addEventListener("click", () => {
            // passo 3    
            desselecionarBotao();
            desselecionarPersonagem();
            // console.log("clicou no botao", botao);
            // console.log(botao.classList);
            //passo 2
            
            // console.log(index);
            // console.log(personagens[index]);
            // passo 3    
            
            botao.classList.add("selecionado")
            personagens[index].classList.add("selecionado")

        });
})

function desselecionarPersonagem() {
    const personagemSelcionado = document.querySelector(".personagem.selecionado");
    personagemSelcionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

// botao.addEventListener("click", () => {
//     console.log("clicou no botao");
// })



