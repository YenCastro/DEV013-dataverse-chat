import { api } from "../components/ModelAPIKey.js";
import { footer } from "../components/footer.js";
import{getApikey, setApikey} from "../lib/apiKey.js";

export const apik = () =>{
    const viewApi = document.createElement("div");
    viewApi.appendChild(api());
    viewApi.appendChild(footer());

    const inputApikey = viewApi.querySelector(".inputApi");
    const buttonApikey = viewApi.querySelector(".savebuttonApi");
    const actualApiKey = getApikey();

    if (actualApiKey !== null){
        inputApikey.value = actualApiKey;
    }
    buttonApikey.addEventListener("click", function(){
        setApikey(inputApikey.value);
        inputApikey.value ="";
    });
    return viewApi;
}