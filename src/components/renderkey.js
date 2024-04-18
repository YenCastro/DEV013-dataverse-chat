import { navigateTo } from "../router.js";

export const renderkey = () => {
  const divkey = document.createElement("div");
  divkey.setAttribute("class", "container2"); // Agrega la clase "container" para centrar el contenido
  divkey.innerHTML = `
        <div class="content2"> <!-- Envuelve todo el contenido en un contenedor adicional -->
        <button class="cerrar" aria-label="Cerrar"> X </button>
            <h3 class="keytitulo">Api Key</h3>
            <p class="keydescripcion">Ingresa API KEY para chat individual</p>
            <div class="sectionkey">
                <input type="text" class="inputApi" placeholder="Ingresa Api Key...">
                <button class="apiSaveButton">Ingresar</button>
            </div>
        </div>
    `;

  divkey.querySelector('.cerrar').addEventListener('click', () => {
    navigateTo('/Home');
  });
  return divkey;
};
