export const filterMenu = () => {
    const filterList = document.createElement("div");
    filterList.innerHTML = `
        <!-- Categoria menu -->
        <label for="filter">Filtrar por: </label>
        <select data-testid="select-filter" name="filter" id="filter">
          <option value="Seleccionar">Seleccionar</option>
          <option value="Literatura infantil">Literatura infantil</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Fábula">Fábula</option>
          <option value="Cuento de hadas">Cuento de hadas</option>
          <option value="Cuento popular">Cuento popular</option>
          <option value="Aventura">Aventura</option>
        </select>
        
        <label for="order">Ordenar por rango de edad: </label>
        <select data-testid="select-age" name="OrderAge" id="order">
          <option value="SeleccionarAge">Seleccionar</option>
          <option value="Todas las edades">Todas las edades</option>
          <option value="3 a 5 años">3 a 5 años</option>
          <option value="6 a 10 años">6 a 10 años</option>
          <option value="11 a 13 años">11 a 13 años</option>
        </select>
        
        <label for="orderad">Ordenar por:</label>
        <select name="orderad" id="orderad" data-testid="select-order">
          <option value="all">Elige una opción</option>
          <option value="asc">Ordenar de la A-Z</option>
          <option value="desc">Ordenar de la Z-A</option>
        </select>
      
        <!-- Categoria clean button -->
      
        <label for="button">
          <button class="clearButton" id="clearButton"    data-testid="button-clear" type="button">Limpiar</button>
        </label>
  
      </div>
      `
      return filterList;
    }