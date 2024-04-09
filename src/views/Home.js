import { header } from "../components/header.js";
import { data } from '../data/dataset.js';
import { renderData } from "../components/renderData.js";
import { homeButton } from "../components/buttonHome.js";
import { filterMenu } from "../components/filters.js";
import { footer } from "../components/footer.js";
import { filterGender, filterByAge, sortData } from '../lib/dataFunctions.js';

export const Home = () => {
  const viewHome = document.createElement("main");
  let newData = [...data];
  const bookData = renderData(newData);
  const filterElement = document.createElement('div');
  filterElement.className = "filters";
  filterElement.appendChild(filterMenu());
  bookData.className = "cardContainer";
  viewHome.append(header(), filterElement, bookData, footer());


  // Componentes fijos
  const selectElement = filterElement.querySelector("#filter");
  const selectAge = filterElement.querySelector("#order");
  const orderBook = filterElement.querySelector("#orderad");
  const clearButton = filterElement.querySelector('[data-testid="button-clear"]')


  // Hacemos migracion de funciones y eventos del DOM
  // Evento change para el elemento select, género.
  selectElement.addEventListener("change", () => {
    const selectedGender = selectElement.value;
    const resultFilter = filterGender(data, selectedGender)

    bookData.innerHTML = "";
    bookData.appendChild(renderData(resultFilter));
  });


  // Evento change por Filtro rango de edad 
  selectAge.addEventListener("change", () => {
    const range = selectAge.value;

    const resultAge = filterByAge(data, range)
    bookData.innerHTML = "";
    bookData.appendChild(renderData(resultAge));
  });


  // Evento change para el ordenamiento.
  orderBook.addEventListener("change", (event) => {
    newData = sortData(newData, "name", event.target.value); // Ordenamos los datos filtrados por nombre

    bookData.innerHTML = '';   // Limpiamos el contenido anterior y renderizamos los datos ordenados
    bookData.appendChild(renderData(newData));
  });

  //CleanButton
  clearButton.addEventListener('click', function () {
    bookData.innerHTML = "";//limpia contenedor
    bookData.appendChild(renderData(newData)); // Renderiza de nuevo la data original
    
    selectElement.selectedIndex = 0;
    selectAge.selectedIndex = 0;
    orderBook.selectedIndex = 0;
    console.log(orderBook.selectedIndex);
  });

  return viewHome;

}