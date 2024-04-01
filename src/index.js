//aqui importo mis funciones de router.js que me ayudan a ver mi pagina despues de entrar al URL
import { Home } from './views/Home.js';
import { ChatTeam } from './views/ChatTeam.js';
import { PrivateChat } from './views/PrivateChat.js';
import { Error } from './views/Error.js';
import { setRoutes, setRootElement, onURLChange } from './router.js';

const routes = {
  "/": Home,
  "/Home": Home,
  "/ChatTeam": ChatTeam,
  "/PrivateChat": PrivateChat,
  "/Error": Error,
};


const viewContanier = document.getElementById('root');
setRoutes(routes);
setRootElement(viewContanier);
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM full loaded and parsed");
  console.log(event.target.location.pathname);
  onURLChange(event.target.location.pathname);
});


// Trae el  HTML y ejecuta los scripts.
document.addEventListener("DOMContentLoaded", (event) =>{
    onURLChange(event.target.location.pathname);

window.addEventListener("popstate", (event) => {
    onURLChange(event.target.location.pathname);
    });
});


