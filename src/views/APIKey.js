import { api } from "../components/ModelAPIKey.js";
import { footer } from "../components/footer.js";
import { getApiKey, setApiKey } from "../lib/apiKey.js";

export const apik = () =>{
    const viewApi = document.createElement("div");
    viewApi.appendChild(api());
    viewApi.appendChild(footer());

    const inputApikey = viewApi.querySelector(".inputApi");
    const buttonApikey = viewApi.querySelector(".savebuttonApi");
    const actualApiKey = getApiKey();

    if (actualApiKey !== null){
        inputApikey.value = actualApiKey;
    }
    buttonApikey.addEventListener("click", function(){
        setApiKey(inputApikey.value);
        inputApikey.value ="";
    });
    return viewApi;
}