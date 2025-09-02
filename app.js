const dadosSeries = [
  {
      id: 1,
      name: 'Bon Appétit, Vossa |Majestade',
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
          <button class="play">▶ Assistir</button> <button class="like">❤</button> <button class="info">ℹ</button> </div>
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
  