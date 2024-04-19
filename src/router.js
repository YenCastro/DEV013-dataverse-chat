let ROUTES = {}; // Contiene todas las rutas que se harán en el proyecto, las mapea.
let rootElement = ''; // Almacena información sobre las rutas en el SPA.


// Valida si newRootElement es un objeto del HTML
export const setRootElement = (newRootElementValue) => {
  rootElement = newRootElementValue;
};


// Asignar rutas // Lanzar errores si rutas no es un objeto // Lanzar errores si las rutas no definen una ruta 
export const setRoutes = (newRoutesValue) => {
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/Error"]) {
      ROUTES = newRoutesValue;
    }
  }
};

// RECORDAR: URLSearchParams es como una herramienta que permite trabajar con los "pedacitos" de información que van después del signo de interrogación en una dirección web. 
// En otras palabras, manipula las cadenas de consulta (query strings) de las URLs. 

const queryStringToObject = (queryString) => { // Esto define una función flecha con un parámetro llamado queryString. Esta función convierte una cadena de consulta (query string) en un objeto.
  const urlParams = new URLSearchParams(queryString); // inicializa un nuevo objeto URLSearchParams a partir de una cadena de consulta proporcionada.
  const queryParams = {}; // Convertir URLSearchParams a un objeto, se utilizará para almacenar los parámetros de la cadena de consulta como pares clave-valor.
  for (const [key, value] of urlParams) { // se utiliza la desestructuración de arrays para obtener los valores de cada entrada en urlParams
    queryParams[key] = value; //En este caso, [key, value] representa cada entrada en urlParams, donde key es el nombre del parámetro y value es su valor.
  }
  return queryParams; // Devolver el objeto
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
  const newURL = `${window.location.origin}${pathname}`; // lo primero dará el protocolo, el host y el puerto de la URL actual, y lo segundo se combinará con el pathname que especificado en la ruta para formar la nueva URL.
  window.history.pushState({}, "", newURL);

  renderView(pathname, props);
};


// Analiza la ubicación de la ruta y los parámetros de búsqueda // convierte los parámetros de búsqueda en un objeto // renderiza la vista con la ruta y el objeto
export const onURLChange = () => {
  const pathname = window.location.pathname;
  const newProps = queryStringToObject(window.location.search);
  renderView(pathname, newProps);

};