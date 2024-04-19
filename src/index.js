// Aqui importo mis funciones de router.js que me ayudan a ver mi pagina despues de entrar al URL
import { Home } from './views/Home.js';
import { PrivateChat } from './views/PrivateChat.js';
import { Error } from './views/Error.js';
import { ApiKey } from './views/ApiKey.js';
import { setRoutes, setRootElement, onURLChange } from './router.js';


const routes = {
  "/": Home, // Esta es la ruta raíz
  "/Home": Home,
  "/PrivateChat": PrivateChat,
  "/Error": Error,
  "/ApiKey": ApiKey,
};


const viewContainer = document.getElementById('root');
setRoutes(routes);
setRootElement(viewContainer);
document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.currentTarget.location.pathname);
});


// Trae el  HTML y ejecuta los scripts.

window.addEventListener("popstate", (event) => {
  onURLChange(event.currentTarget.location.pathname);
});