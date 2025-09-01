const dadosSeries = [
  {
      id: 1,
      name: 'Bon Appétit, Vossa |Majestade',
      type: 'Minissérie',
      img: 'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABRDSsLMhvha-UticfIR3VAFJ0LtRJk-jAUeVCCL95atDX_tKwiy0d7kwQh8kih5BzpLLsuQnzVXTIP7OhyfyaAnn3MEwyU87P6mm.jpg?r=0be',
      text: "Peculiar - Romântico - De época",
      classificacao: "A12",
    },
    {
      id: 2,
      name: 'Pssica',
      type: '4 episódios',
      img: 'https://hqpop.com.br/wp-content/uploads/2025/08/hqpop_pssica_2208.jpg',
      text: "Impactante - Sombrio - Acelerado",
      classificacao: "A18",
    },
    {
      id: 3,
      name: 'Wandinha',
      type: '2 temporadas',
      img: 'https://hollywoodforevertv.com.br/wp-content/uploads/wandinha-nome-da-personagem-muda-em-cada-pais-entenda.jpg',
      text: "Sarcástico - Arrepiante - Humor ácido",
      classificacao: "16",
    },
    {
      id: 4,
      name: 'Refém',
      type: 'Minissérie',
      img: 'https://tm.ibxk.com.br/2025/08/22/22181527828014.jpg',
      text: "Suspense no ar - Antologia - Conspiração",
      classificacao: "A16",
    },
    {
      id: 5,
      name: 'Além do Direito',
      type: 'Minissérie',
      img: 'https://www.otempo.com.br/content/dam/otempo/editorias/entretenimento/2025/7/entretenimento-alem-do-direito-1753136686.webp',
      text: "Inspirador - Comovente - Drama",
      classificacao: "A16",
    },
    {
      id: 6,
      name: 'Katrina Depois da Tempestade',
      type: '3 episódios',
      img: 'https://i.ytimg.com/vi/BnDZJQugyNY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBphzMfK11po6FOVRt-h8k6StI2Og',
      text: "Investigativo - Emocionante - Série documental",
      classificacao: "A16",
    },
    {
      id: 7,
      name: 'The Chosen',
      type: '5 temporadas',
      img: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/07/the-chosen.webp?w=419&h=283&crop=0',
      text: "Honesto - Inspirador - Drama",
      classificacao: "14",
    },
    {
      id: 8,
      name: 'Na Lama',
      type: '1 temporada',
      img: 'https://p2.trrsf.com/image/fget/cf/500/0/images.terra.com/2025/08/26/973878231-99cd571f230bc740-1400x823-1.jpg',
      text: "Impactante - Ação - Vários protagonistas",
      classificacao: "A18",
    },
    {
      id: 9,
      name: 'Shameless',
      type: '11 temporadas',
      img: 'https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABVqvf8JN-iHOSmT9Ad9JnIxYAsOCITpJtkGM61uZfkl4m7rIWRBS_9hh2KI3kP5xbxi2ENoF7EkY2BeLqQcLXCln1MgdRuEcMVFa.jpg?r=93f',
      text: "Excêntrico - Picante - Humor ácido",
      classificacao: "A18",
    },
    {
      id: 10,
      name: 'Pecados Inconfessáveis',
      type: '18 episódios',
      img: 'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABcGPVFegfud-0-SYl5cZqc533GSrF-wzbtwTWZf484PSqwXsxFW60kxs2JGxVemvLwx8zNPa4pdvTZE0zg-lpX-8NsXs4V4ATPHa.jpg?r=87b',
      text: "Quente - Suspense no ar - Novela", 
      classificacao: "A18",
    },
  ];
  
  // Pega todos os itens do carrossel
  document.querySelectorAll(".carousel-item").forEach((item, index) => {
    const info = dadosSeries[index];
    if (info) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      // Define a cor da classificação
      let ageClass = "";
      const idade = parseInt(info.classificacao.replace("A", ""));
      if (idade == 12) ageClass = "yellow";
      else if (idade == 14) ageClass = "orange";
      else if (idade == 16) ageClass = "red";
      else ageClass == "black";
  
      card.innerHTML = `
        <div>
          <h3>${info.name}</h3>
          <p><b>${info.type}</b></p>
          <p>${info.text}</p>
        </div>
        <div class="buttons">
          <button class="play">▶ Assistir</button>
          <button class="like">❤ Favoritar</button>
          <button class="info">ℹ Info</button>
        </div>
        <div class="age ${ageClass}">${info.classificacao}</div>
      `;
      item.appendChild(card);
    }
  });
  

  const carousel = document.querySelector(".top-10-carousel");
  const nextBtn = document.querySelector(".btn-next");
  const prevBtn = document.querySelector(".btn-prev");
  
  let currentIndex = 0;
  const itemWidth = 210; 
  
  nextBtn.addEventListener("click", () => {
    const maxIndex = carousel.children.length - Math.floor(carousel.offsetWidth / itemWidth);
    if (currentIndex < maxIndex) currentIndex++;
    carousel.scrollTo({ left: currentIndex * itemWidth, behavior: "smooth" });
  });
  
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) currentIndex--;
    carousel.scrollTo({ left: currentIndex * itemWidth, behavior: "smooth" });
  });
  