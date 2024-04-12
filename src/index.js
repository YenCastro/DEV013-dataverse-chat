// Aqui importo mis funciones de router.js que me ayudan a ver mi pagina despues de entrar al URL
import { Home } from './views/Home.js';
import { PrivateChat } from './views/PrivateChat.js';
import { Error } from './views/Error.js';
import { Apik } from './views/APIKey.js';
import { setRoutes, setRootElement, onURLChange } from './router.js';


const routes = {
  "/": Home,
  "": Home,
  "/Home": Home,
  "/PrivateChat": PrivateChat,
  "/Api": Apik,
  "/Error": Error,
};


const viewContainer = document.getElementById('root');
setRoutes(routes);
setRootElement(viewContainer);
document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.currentTarget.location.pathname);
  console.log(event.currentTarget.location.pathname);
});


// Trae el  HTML y ejecuta los scripts.

window.addEventListener("popstate", (event) => {
    onURLChange(event.currentTarget.location.pathname);
    });

