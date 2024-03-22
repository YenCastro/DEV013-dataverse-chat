import {Home} from './views/Home.js';
import { setRoutes,setRootElement,onURLChange } from './router.js';
const ROUTES ={
    "/": Home ,
    "/error" : 'Some',
}

const viewContanier = document.getElementById('root');
setRoutes(routes);
setRootElement(viewContanier);
document.addEventListener("DOMContentLoaded", (event) =>{
    onURLChange(event.target.location.pathname)
});