# Projeto Carrossel de Séries - Desafio Vitrine JS

Este projeto é uma recriação do componente de carrossel "Top 10" da Netflix, desenvolvido inteiramente com HTML, CSS e JavaScript puro. O objetivo foi aplicar e demonstrar conhecimentos práticos de manipulação do DOM e eventos, como parte do desafio acadêmico **Vitrine JS**.

---

### Demonstração

Abaixo, uma demonstração do projeto em funcionamento, destacando a navegação e a interatividade dos cards.

---

### 📖 Sobre o Projeto

O projeto foi desenvolvido para o desafio **Vitrine JS**, que propunha a criação de um carrossel interativo. Optamos por recriar o componente da Netflix para aplicar os conceitos de JavaScript em um contexto de interface de usuário real e conhecido.

O foco principal foi a manipulação de elementos HTML de forma dinâmica, carregando dados de um array de objetos em `app.js` para construir os componentes da tela, e implementar a lógica de navegação do carrossel.

---

### ✨ Funcionalidades

* **Renderização Dinâmica:** Os itens do carrossel são gerados e inseridos no DOM a partir de um array de dados local, utilizando JavaScript.
* **Navegação por Botões:** Os botões de "Anterior" e "Próximo" controlam a rolagem horizontal do carrossel com uma transição suave.
* **Cards com Efeito Hover:** Ao posicionar o mouse sobre um item, um card com informações detalhadas da série é exibido, demonstrando uma interação mais rica com o usuário.
* **Estilização Condicional:** A cor do selo de classificação etária é definida dinamicamente via JavaScript, de acordo com o valor da classificação de cada série.

---

### 🛠️ Tecnologias Utilizadas

As seguintes tecnologias foram utilizadas na construção do projeto:

* **HTML5:** Para a estruturação dos elementos.
* **CSS3:** Para a estilização, layout, animações e o efeito de hover.
* **JavaScript (Vanilla):** Para toda a lógica de manipulação do DOM, criação dinâmica de elementos e gerenciamento de eventos de clique.

---

### ▶️ Como Executar

O projeto não requer nenhuma dependência ou processo de build.

1.  Clone o repositório:
    ```bash
    git clone https://github.com/EmilioStuart/carrossel_de_revisoes.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd carrossel_de_revisoes
    ```
3.  Abra o arquivo `index.html` em qualquer navegador web.

---

### 💡 Melhoria Implementada

Conforme solicitado nos critérios do desafio, uma melhoria foi adicionada ao projeto base. A funcionalidade escolhida foi a implementação de um **card de detalhes que surge com o evento de hover**.

Enquanto a funcionalidade básica do carrossel foi mantida, essa adição cria uma experiência de usuário mais interativa e próxima à da plataforma original. A implementação combina a criação dinâmica do card via JavaScript com transições controladas por CSS (`opacity` e `visibility`) para garantir uma animação fluida, demonstrando a integração entre a lógica da aplicação e sua apresentação visual.

---

### URL da página Hospedada

https://emiliostuart.github.io/carrossel_de_revisoes/

---

Desenvolvido por [EmilioStuart](https://github.com/EmilioStuart) e [CarolTiemy](https://github.com/CarolTiemy).
