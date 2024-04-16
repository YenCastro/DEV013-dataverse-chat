
export const renderkey = () => {
    const divkey = document.createElement("div");
    divkey.setAttribute("class", "api");
    divkey.innerHTML = `
        <h3 class="keytitulo">Api Key</h3>
        <p>Ingresa API KEY para chat individual</p>
        <div class="sectionkey">
            <input type="text" class="inputApi" placeholder="Ingresa Api Key...">
            <button class="apiSaveButton">Ingresar</button>
        </div>
    `;
    return divkey;
};
