// Lista com os dados que serão exibidos no carrossel
const dadosSeries = [
  {
      id: 1,
      name: 'Bon Appétit, Vossa Majestade',
      type: 'Minissérie',
      text: "Peculiar - Romântico - De época",
      classificacao: "A12",
    },
    {
      id: 2,
      name: 'Pssica',
      type: '4 episódios',
      text: "Impactante - Sombrio - Acelerado",
      classificacao: "A18",
    },
    {
      id: 3,
      name: 'Wandinha',
      type: '2 temporadas',
      text: "Sarcástico - Arrepiante - Humor ácido",
      classificacao: "A16",
    },
    {
      id: 4,
      name: 'Refém',
      type: 'Minissérie',
      text: "Suspense no ar - Antologia - Conspiração",
      classificacao: "A16",
    },
    {
      id: 5,
      name: 'Além do Direito',
      type: 'Minissérie',
      text: "Inspirador - Comovente - Drama",
      classificacao: "A16",
    },
    {
      id: 6,
      name: 'Katrina Depois da Tempestade',
      type: '3 episódios',
      text: "Investigativo - Emocionante - Série documental",
      classificacao: "A16",
    },
    {
      id: 7,
      name: 'The Chosen',
      type: '5 temporadas',
      text: "Honesto - Inspirador - Drama",
      classificacao: "A14",
    },
    {
      id: 8,
      name: 'Na Lama',
      type: '1 temporada',
      text: "Impactante - Ação - Vários protagonistas",
      classificacao: "A18",
    },
    {
      id: 9,
      name: 'Shameless',
      type: '11 temporadas',
      text: "Excêntrico - Picante - Humor ácido",
      classificacao: "A18",
    },
    {
      id: 10,
      name: 'Pecados Inconfessáveis',
      type: '18 episódios',
      text: "Quente - Suspense no ar - Novela", 
      classificacao: "A18",
    },
  ];
  
// Seleciona todos os espaços no HTML que vão receber os cards do carrossel
document.querySelectorAll(".carousel-item").forEach((item, index) => {
  const info = dadosSeries[index]; // pega dados da série com base no índice
  if (info) {
    const card = document.createElement("div"); // cria um elemento <div>
    card.classList.add("card"); 

    // Define a cor da classificação indicativa 
    let ageClass = "";
    const idade = parseInt(info.classificacao.replace("A", "")); // pega apenas o numero, removendo a letra A
    if (idade == 12) ageClass = "yellow";
    else if (idade == 14) ageClass = "orange";
    else if (idade == 16) ageClass = "red";
    else ageClass = "black"; 

    // Monta o conteúdo do card em HTML
    card.innerHTML = `
      <div>
        <h3>${info.name}</h3>
        <p><b>${info.type}</b></p>
        <p>${info.text}</p>
      </div>
      <div class="buttons">
        <button class="play">▶ Assistir</button> 
        <button class="like">❤</button> 
        <button class="info">ℹ</button>
      </div>
      <div class="age ${ageClass}">${info.classificacao}</div>
    `;

    // Insere o card dentro do item do carrossel
    item.appendChild(card);
  }
});

const carousel = document.querySelector(".top-10-carousel");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

let currentIndex = 0; // posição atual do carrossel
const itemWidth = 230; // largura do espaço dar rolagem

// Função que move o carrossel até o card indicado pelo índice
function showItem(index) {
  carousel.scrollTo({
    left: index * itemWidth, // calcula a posição de rolagem
    behavior: "smooth" 
  });
}

// Botão "próximo" - move para a direita
nextBtn.addEventListener("click", () => {
  currentIndex++; 
  if (currentIndex > carousel.children.length) {
    currentIndex = 0; //ao chegar no final volta para o início
  }
  showItem(currentIndex);
});

// Botão "anterior" - move para a esquerda
prevBtn.addEventListener("click", () => {
  currentIndex--; 
  if (currentIndex < 0) {
    currentIndex = carousel.children.length - 1; // se passou do início, vai para o último
  }
  showItem(currentIndex);
});
