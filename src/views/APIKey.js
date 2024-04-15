import { renderkey } from "../components/renderkey.js";
import { footer } from "../components/footer.js";
import { getApiKey, setApiKey } from "../lib/apiKey.js";

export const ApiKey = () =>{
    const viewapi = document.createElement("div");
   viewapi.appendChild(renderkey());
    viewapi.appendChild(footer());

    const inputApikey = viewapi.querySelector(".inputApi");
    const buttonApikey = viewapi.querySelector(".apiSaveButton");
    const actualApikey = getApiKey();

    if (actualApikey !== null){ //si actualapikey no es null
        inputApikey.value = actualApikey; //si hay se clave se pondra en el campo de entrada
    } 
    buttonApikey.addEventListener("click", function(){
        setApiKey(inputApikey.value);
        inputApikey.value ="";//limpia el campo de entrada despues del boton ingresar 
    });
    return viewapi;
}