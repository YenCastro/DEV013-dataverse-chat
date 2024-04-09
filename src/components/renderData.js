import { data } from '../data/dataset.js'; // Importa los datos primero
import { navigateTo } from "../router.js";


export const renderData = (data) => {
  const listCards = document.createElement("ul");
  listCards.className = "listCards";
  data.forEach((books) => {
    const card = document.createElement("li");
    card.setAttribute("id", "card");
    card.innerHTML += ` 
      <li class="card" itemscope itemtype="${books.name}">
        <div class="PrimeraCara">
        <h2 itemprop="name">${books.name}</h2> <button class="ViewChat" data-filmid="${books.name}"><i class="fas fa-comment"></i></button>
        </div>
        <img id="Img" src="${books.imageUrl}" alt="${books.name}" itemprop="image" />
        </div>
        <div class="SegundaCara">
      
        <dl>
        <dt>genero:</dt>
        <dd interprop="genero"> ${books.facts.genero}</dd>
  
        <dt>Descripción:</dt>
        <dd itemprop="description">${books.description}</dd>
    
        <dt>Dato curioso 1:</dt>
        <dd itemprop="curiousFact1">${books.facts.curiousFact1}</dd>
  
        <dt>Rango De Edad:</dt>
        <dd class="ageRange" itemprop="RangoDeEdad">${books.facts.RangoDeEdad}</dd>
  
        </dl>
        </div>
        </li>`;

        listCards.appendChild(card);

        const firstFace = card.querySelector(".PrimeraCara");
        const secondFace = card.querySelector(".SegundaCara");
        const viewChat = card.querySelector(".viewChat");
    
    });
    return listCards;
  
  };