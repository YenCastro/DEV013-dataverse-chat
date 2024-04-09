import { data } from '../data/dataset.js'; // Importa los datos primero
import { navigateTo } from "../router.js";


export const renderData = (data) => {
  const listCards = document.createElement("ul");
  listCards.className = "listCards";
  data.forEach((books) => {
    const card = document.createElement("li");
    card.classList.add("card");
    card.setAttribute("itemscope", "");
    card.setAttribute("itemtype", books.name);
    card.setAttribute("id", "card");


    card.innerHTML += ` 
        <div class="PrimeraCara">
        <h2 itemprop="name">${books.name}</h2> <button id="ViewChat" class="ViewChat" data-filmid="${books.name}"><i class="fas fa-comment"></i></button>
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
        </div>`;

        listCards.appendChild(card);

        const firstFace = card.querySelector(".PrimeraCara");
        const secondFace = card.querySelector(".SegundaCara");
        const viewChat = card.querySelector("#ViewChat");
    
        viewChat.addEventListener("click", () => {
          navigateTo("/PrivateChat", books);
            });


    /* Alamcenaremos el books.name en storyNmae
    const storyName = books.name;
    const listItem = document.createElement("li");
 
  
    const storyTitle = document.createElement("h2");
    storyTitle.textContent = storyName;
;
  
    const image = document.createElement("img");
    image.setAttribute("id", "image");
    image.setAttribute("src", books.imageUrl);
    image.setAttribute("alt", storyName);
    image.setAttribute("itemprop", "image");
  
    const div = document.createElement("div");
    div.classList.add("PrimeraCara");
    div.appendChild(storyTitle);
    div.appendChild(image);
    listItem.appendChild(div);
    viewEl.appendChild(listItem);
  
  document.body.appendChild(header());
  document.body.appendChild(footer());
    });*/
  //
});
    return listCards;
  
  };