// PARTE 1: Lista de perguntas e respostas
const perguntas = [
  {
    pergunta: "O que diferencia uma transmissão flexível de uma transmissão rígida?",
    respostas: [
      { opcao: "As transmissões rígidas são feitas de plástico, enquanto as flexíveis utilizam apenas metais leves.", correto: false, porque: "ERRADO. As transmissões flexíveis utilizam elementos como correias, correntes ou cabos que permitem certa elasticidade, absorvendo vibrações e permitindo variações de posição entre os eixos. Já as transmissões rígidas (como engrenagens) têm conexão direta e rígida, transmitindo o movimento de forma mais precisa, mas com menos flexibilidade."},
      { opcao: "As transmissões flexíveis utilizam elementos como correias, correntes ou cabos. Já as transmissões rígidas (como engrenagens) têm conexão direta e rígida", correto: true, porque: "CORRETO. As transmissões flexíveis utilizam elementos como correias, correntes ou cabos que permitem certa elasticidade, absorvendo vibrações e permitindo variações de posição entre os eixos. Já as transmissões rígidas (como engrenagens) têm conexão direta e rígida, transmitindo o movimento de forma mais precisa, mas com menos flexibilidade."},
      { opcao: "As transmissões flexíveis são usadas apenas em sistemas hidráulicos, enquanto as rígidas operam apenas com eletricidade.", correto: false, porque: "ERRADO. As transmissões flexíveis utilizam elementos como correias, correntes ou cabos que permitem certa elasticidade, absorvendo vibrações e permitindo variações de posição entre os eixos. Já as transmissões rígidas (como engrenagens) têm conexão direta e rígida, transmitindo o movimento de forma mais precisa, mas com menos flexibilidade."}
    ]
  },
  {
    pergunta: "Cite dois exemplos práticos onde as transmissões flexíveis são amplamente utilizadas.",
    respostas: [
      { opcao: "Fusos de esfera em impressoras 3D e Redutores planetários de precisão", correto: false, porque: "ERRADO. Bicicletas (uso de corrente) - Máquinas agrícolas (uso de correias em V)"},
      { opcao: "Transmissões de relógios mecânicos e Sistemas de engrenagens helicoidais industriais", correto: false, porque: "ERRADO. Bicicletas (uso de corrente) - Máquinas agrícolas (uso de correias em V)"},
      { opcao: "Bicicletas e Máquinas agrícolas", correto: true, porque: "CORRETO. Bicicletas (uso de corrente) - Máquinas agrícolas (uso de correias em V)"},
    ]
  },
  {
    pergunta: "Qual a principal vantagem do uso de correias em relação às engrenagens?",
    respostas: [
      { opcao: "As correias são mais precisas na transmissão de torque que as engrenagens.", correto: false, porque: "ERRADO. A principal vantagem é a capacidade de absorver choques e vibrações, além de exigir menor custo de manutenção e permitir distâncias maiores entre os eixos." },
      { opcao: "A principal vantagem é a capacidade de absorver choques e vibrações", correto: true, porque: "CORRETO. A principal vantagem é a capacidade de absorver choques e vibrações, além de exigir menor custo de manutenção e permitir distâncias maiores entre os eixos."},
      { opcao: "As correias eliminam completamente a necessidade de manutenção nos sistemas.", correto: false, porque: "ERRADO. A principal vantagem é a capacidade de absorver choques e vibrações, além de exigir menor custo de manutenção e permitir distâncias maiores entre os eixos." }
    ]
  },
  {
    pergunta: "Por que é importante manter a tensão adequada em uma correia?",
    respostas: [
      { opcao: "Para evitar que a correia acelere o motor além da rotação máxima permitida", correto: false, porque: "ERRADO. Porque a tensão correta evita o escorregamento da correia, garante a eficiência na transmissão de potência, reduz o desgaste precoce dos componentes e aumenta a vida útil do sistema." },
      { opcao: "Porque a tensão correta evita o escorregamento da correia, garante a eficiência na transmissão de potência", correto: true, porque: "CORRETO. Porque a tensão correta evita o escorregamento da correia, garante a eficiência na transmissão de potência, reduz o desgaste precoce dos componentes e aumenta a vida útil do sistema."},
      { opcao: "Para aumentar a velocidade de rotação dos eixos sem alterar o diâmetro das polias.", correto: false, porque: "ERRADO. Porque a tensão correta evita o escorregamento da correia, garante a eficiência na transmissão de potência, reduz o desgaste precoce dos componentes e aumenta a vida útil do sistema." },
    ]
  },
  {
    pergunta: "Quais os principais tipos de correias utilizadas em transmissões?",
    respostas: [
      { opcao: "Correias planas, Correias em V e Correias dentadas (ou sincronizadoras)", correto: true, porque: "CORRETO. Correias planas - Correias em V - Correias dentadas (ou sincronizadoras)"},
      { opcao: "Correias de corrente contínua e Correias magnéticas", correto: false, porque: "ERRADO. Correias planas - Correias em V - Correias dentadas (ou sincronizadoras)" },
      { opcao: "Correias com eixo cardã e Correias hidráulicas de pressão", correto: false, porque: "ERRADO. Correias planas - Correias em V - Correias dentadas (ou sincronizadoras)" }
    ]
  }
];


// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const conteudoPorque = document.querySelector(".pq");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const voltarBtn = document.getElementById("voltarBtn");
const avancarBtn = document.getElementById("avancarBtn");
const naveg = document.querySelector(".navegacao")
const titu = document.querySelector(".titulo")
const conteu_jogo = document.querySelector(".conteudo-jogo")
// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  conteudoPorque.innerHTML = ""; // Limpa a explicação anterior

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
      if (resposta.correto) {   
        if (acertos < 5) {
            acertos++;
        }
        }
      conteudoPorque.innerHTML = resposta.porque; // Exibe a explicação

      // Cria o botão "Avançar" apenas uma vez após o clique
      const botaoavan = document.createElement("button");
      botaoavan.textContent = "Avançar";
      botaoavan.setAttribute("id", "butavan")

      botaoavan.addEventListener("click", () => {
        // Avança para a próxima pergunta
        indiceAtual++;

        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      });

      // Adiciona o botão "Avançar" ao conteúdo
      conteudoPorque.append(botaoavan);
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  if(acertos > 3){
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}. Parabéns!!! <br> \u{1F973} \u{1F973} \u{1F973}	`; // Exibe o resultado
  }else{
    textoFinal.innerHTML = `Você acertou       ${acertos} de ${perguntas.length}`;       // Exibe o resultado
  }
  conteu_jogo.style.display = "flex";
  conteu_jogo.style.justifyContent = "center";
  conteu_jogo.style.alignItems = "center";
  conteu_jogo.style.height = "80vh";
  conteu_jogo.style.width = "auto";
  conteudo.style.display = "none"; // Esconde as perguntas
  naveg.style.display = "none"; // Esconde aba de navegação
  titu.style.display = "none"; // Esconde o título
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();

voltarBtn.addEventListener("click", () => {
  if (indiceAtual > 0) {
    indiceAtual--;
    carregarPergunta();
  }
});

avancarBtn.addEventListener("click", () => {
  if (indiceAtual < perguntas.length - 1) {
    indiceAtual++;
    carregarPergunta();
  } else {
    finalizarJogo(); // se estiver na última pergunta
  }
});