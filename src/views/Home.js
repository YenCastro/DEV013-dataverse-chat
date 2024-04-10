import {data} from '../data/dataset.js'; // Importa los datos primero
import { navigateTo } from "../router.js";
import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { filterGender, filterByAge, sortData, clearFilters } from '../lib/dataFunctions.js';


export function Home() {
  const viewEl = document.createElement('div')
  viewEl.innerHTML += ` 
  <div class="seccion"> 
  <h1>Cuantos Cuentos</h1> 
  <p>¡Déjate llevar por la magia de la imaginación en cada página!</p>
  </div>
  <div class="ReadMore"> 
  <button id="scrollButton">Deslizar</button>
  </div>
  `
  // Agregamos una clase a el elemento viewEl
  viewEl.classList.add('Contenedor')
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    //alamcenaremos el element.name en storyNmae
  const storyName = element.name;
  const listItem = document.createElement("li");
  listItem.classList.add("card");
  listItem.setAttribute("itemscope", "");
  listItem.setAttribute("itemtype", storyName);
  const storyTitle = document.createElement("h2");
  storyTitle.textContent = storyName;
  storyTitle.addEventListener("click", () =>{
    navigateTo(`/PrivateChat`, element);
  });
  const image = document.createElement("img");
  image.setAttribute("id", "image");
  image.setAttribute("src", element.imageUrl);
  image.setAttribute("alt", storyName);
  image.setAttribute("itemprop", "image");

  const div = document.createElement("div");
  div.classList.add("PriemraCara");
  div.appendChild(storyTitle);
  div.appendChild(image);

  listItem.appendChild(div);
  viewEl.appendChild(listItem);

  }

  document.body.appendChild(header());
  document.body.appendChild(footer());
  
  return viewEl;

  
};
