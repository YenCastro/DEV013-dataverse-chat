let ROUTES = {}; // Contiene todas las rutas que se harán en el proyecto, las mapea.
let rootElement = ''; // Almacena información sobre las rutas en el SPA.


// Valida si newRootElement es un objeto del HTML
export const setRootElement = (newRootElementValue) => {
  rootElement = newRootElementValue;
};


// Asignar rutas // Lanzar errores si rutas no es un objeto // Lanzar errores si las rutas no definen una ruta 
export const setRoutes = (newRoutesValue) => {
  if (typeof newRoutesValue === "object"){
    if (newRoutesValue["/Error"]){
      ROUTES = newRoutesValue;
   }
  }
};

// Vacía elemento root. Encuentra la vista correcta entre el pathname y la ruta a renderizar. Cargar vista error. Renderizar componente.
  const renderView = (pathname, props = {}) => {
    const root = rootElement;
    root.innerHTML = '';
// Encontrar vista correcta por el pathname.
    if (ROUTES[pathname]) {
      const template = ROUTES[pathname](props);
      root.appendChild(template);
    } else {
      root.appendChild(ROUTES['/Error']());
    }
  };



// Actualizar el historial de navegador a partir del contenido visitado en el sitio web.
export const navigateTo = (pathname, props = {}) => {
  console.log(window.location.hostname);
  console.log(pathname);
  const URLVisited = window.location.hostname + pathname;
  window.history.pushState({}, "", URLVisited);
  renderView(pathname, props);
};


// Analiza la ubicación de la ruta y los parámetros de búsqueda // convierte los parámetros de búsqueda en un objeto // renderiza la vista con la ruta y el objeto
export const onURLChange = (pathname) => {
  navigateTo(pathname);
}