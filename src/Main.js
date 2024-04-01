import { filterGender, filterByAge, sortData, clearFilters } from './dataFunctions.js';
import { Home } from './views/Home.js'
import data from './data/dataset.js'; // Importa los datos primero

document.getElementById('root').appendChild(Home(data));


let filteredData = data;
const selectElement = document.querySelector("#filter");
const render = document.querySelector("#render");
const selectAge = document.querySelector("#order")
const orderBook = document.querySelector("#orderad");
filteredData = [...data];


// Evento change para el elemento select, género.
selectElement.addEventListener("change", () => {
  const selectGender = selectElement.options[selectElement.selectedIndex].value
  const resultFilter = filterGender(data, selectGender)
  render.innerHTML = "";
  render.appendChild(Home(resultFilter));
});


// Evento change por Filtro rango de edad 
selectAge.addEventListener("change", () => {
  const range = selectAge.options[selectAge.selectedIndex].value;
  const resultAge = filterByAge(data, range)
  render.innerHTML = "";
  render.appendChild(Home(resultAge));
});


//CleanButton
document.querySelector(".clearButton").addEventListener("click", () => {
  render.innerHTML = "";//limpia contenedor
  render.appendChild(Home(clearFilters(data)));//renderia de nuevo la data original
  selectElement.selectedIndex = 0;// lo establece  ala opcion pre determinada al inicio 
  selectAge.selectedIndex = 0;
  orderBook.selectedIndex = 0;

});

// Evento change para el ordenamiento.
orderBook.addEventListener("change", (event) => {
  // Ordenamos los datos filtrados por nombre
  filteredData = sortData(filteredData, "name", event.target.value);
  // Limpiamos el contenido anterior y renderizamos los datos ordenados
  render.innerHTML = '';
  render.appendChild(Home(filteredData));
});

//Funcion para botòn deslizante//
document.getElementById('scrollButton').addEventListener('click', function () {
  const render = document.getElementById('render');
  render.scrollIntoView({ behavior: 'smooth' });// La opción behavior: 'smooth' hace que el desplazamiento sea suave y animado en lugar de instantáneo.
});