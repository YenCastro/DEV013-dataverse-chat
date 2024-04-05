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
  // Agregamos una clase a el elemento viewEl.
  viewEl.classList.add('Contenedor')
  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    viewEl.innerHTML += ` 
    <li class="card" itemscope itemtype="${element.name}">
      <div class="PrimeraCara">
      <h2 itemprop="name">${element.name}</h2>
      <img id="Img" src="${element.imageUrl}" alt="${element.name}" itemprop="image" />
      </div>
      <div class="SegundaCara">
    
      <dl>
      <dt>genero:</dt>
      <dd interprop="genero"> ${element.facts.genero}</dd>

      <dt>Descripción:</dt>
      <dd itemprop="description">${element.description}</dd>
  
      <dt>Dato curioso 1:</dt>
      <dd itemprop="curiousFact1">${element.facts.curiousFact1}</dd>

      <dt>Rango De Edad:</dt>
      <dd class="ageRange" itemprop="RangoDeEdad">${element.facts.RangoDeEdad}</dd>

      </dl>
      </div>
      </li>`
  }

  return viewEl;

  
};
