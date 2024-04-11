export const api =() =>{
    const apiel = document.createElement("div");
    apiel.setAttribute("class", "api");
    apiel.innerHTML=`
    <h3 class="apititle"> Api Key</h3>
    <p class= "subtitle"> Ingresa API KEY para chat individual </p>
    <div class="contenApi">
    <input type="text class="inputApi" placeholder="Ingresa Api Key...">
    <button class="savebuttonApi">Ingresar </buton>
    </div>
    `;
    return apiel;
};