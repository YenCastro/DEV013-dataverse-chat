import { data } from '../data/dataset.js'; 
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
        </div>`;

        listCards.appendChild(card); 

        const firstFace = card.querySelector(".PrimeraCara");
        const secondFace = card.querySelector(".SegundaCara");
        const viewChat = card.querySelector("#ViewChat");
        const storyName = books.name;

        viewChat.addEventListener("click", function() {
          navigateTo("/PrivateChat", books);
          return viewChat;
        });

});
    return listCards;
  
  };