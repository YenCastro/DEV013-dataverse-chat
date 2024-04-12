import { api } from "../components/ModelAPIKey.js";
import { footer } from "../components/footer.js";
import { getApiKey, setApiKey } from "../lib/apiKey.js";

export const Apik = () =>{
    const viewApi = document.createElement("div");
   viewApi.appendChild(api());
    viewApi.appendChild(footer());

    const inputApikey = viewApi.querySelector(".inputApi");
    const buttonApikey = viewApi.querySelector(".savebuttonApi");
    const actualApiKey = getApiKey();

    if (actualApiKey !== null){ //si actualapikey no es null
        inputApikey.value = actualApiKey; //si hay se clave se pondra en el campo de entrada
    } 
    buttonApikey.addEventListener("click", function(){
        setApiKey(inputApikey.value);
        inputApikey.value ="";//limpia el campo de entrada despues del boton ingresar 
    });
    return viewApi;
}