import { Home } from "./views/Home.js";
import {IndividualChat} from "./views/IndividualChat.js";
import { GroupChat } from "./views/GroupChat.js";
import { Error } from "./views/Error.js";
import { setRoutes, setRootElement, onURLChange } from './router.js';

//This is a dictionary *
const routes = {
    "/Home": Home,
    "/Error": Error,
    "/Group": GroupChat,
    "/Individual": IndividualChat,
  };

const viewContainer = document.getElementById('root');
setRoutes(routes);
setRootElement(viewContainer);

// Trae el  HTML y ejecuta los scripts.
document.addEventListener("DOMContentLoaded", (event) =>{
    onURLChange(event.target.location.pathname);

window.addEventListener("popstate", (event) => {
    onURLChange(event.target.location.pathname);
    });
});



