// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
        pergunta: "Qual herói da Marvel usa um escudo como arma?",
        respostas: [{opcao: "Capitão américa", correto: true},
                    {opcao: "Thor", correto: false},
                    {opcao: "Homem de Ferro", correto: false}]
    },
    {
        pergunta: "Qual o verdadeiro nome do Homem de Ferro?",
        respostas: [{opcao: "Steve Rogers", correto: false},
                    {opcao: "Tony Stark", correto: true},
                    {opcao: "Bruce Banner", correto: false}]
    },
    {
        pergunta: "Qual foi o primeiro filme lançado do Universo Cinematográfico da Marvel?",
        respostas: [{opcao: "Capitão América: O Primeiro Vingador", correto: false},
                    {opcao: "O Incrível Hulk", correto: false},
                    {opcao: "Homem de Ferro", correto: true}]
    },
    {
        pergunta: "Quem é o vilão principal em Vingadores: Guerra Infinita?",
        respostas: [{opcao: "Thanos", correto: true},
                    {opcao: "Ultron", correto: false},
                    {opcao: "Loki", correto: false}]
    },
    {
        pergunta: "Qual é o nome verdadeiro do Pantera Negra?",
        respostas: [{opcao: "T'Challa", correto: true},
                    {opcao: "M'Baku", correto: false},
                    {opcao: "Killmonger", correto: false}]
    },
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        // Pega a resposta atual com base no índice 'i'
        const resposta = perguntaAtual.respostas[i];
        // Cria um novo elemento 'button' (botão)
        const botao = document.createElement("button");
        // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
        botao.classList.add("botao-resposta");
        // Define o texto do botão com a opção de resposta (resposta.opcao)
        botao.innerText = resposta.opcao;
        // Adiciona um evento de clique no botão
        botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
            acertos++; // Incrementa o contador de acertos
        }

        // Avança para a próxima pergunta
        indiceAtual++;

        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
            carregarPergunta(); // Carrega a próxima pergunta
        } else {
            // Se não houver mais perguntas, finaliza o jogo
            finalizarJogo();
        }
        };

        // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
        respostasElemento.appendChild(botao);
    }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
    textoFinal.innerHTML = `Parabéns! Você acertou ${acertos} de ${perguntas.length}.`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();