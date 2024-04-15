import { data } from '../data/dataset.js'; // Importa los datos primero
import { footer } from "../components/footer.js";
import { navigateTo } from "../router.js";


export const PrivateChat = (books) => {
    const container = document.createElement('div');
    // Busca el cuento en los datos
//recuerda que ahora tu cuento a sido almacenado en story

    container.innerHTML = `   
    <body>
    <div class="container">
      <button class="cerrar" aria-label="Cerrar">✖️</button>
      <button class="apikey" > API KEY  </button>
      <div class="image-container">
        <img src="${books.imageUrl}" id="imagen" alt="Imagen">
        <p>${books.shortDescription} ${books.facts.curiousFact1}. ${books.facts.curiousFact2}</p>
      </div>
      <div class="chat-container">
        <div class="chat-messages" id="chat-messages">
          <!-- Aquí se mostrarán los mensajes -->
        </div>
      </div>
      <div id="input-container">
        <input type="text" id="message-input" placeholder="Escribe un mensaje...">
        <button id="send-button">Enviar</button>
        
      </div>
      
    </div>
    `;
 container.querySelector('.cerrar').addEventListener('click',()=>{
 navigateTo('/Home');
});

container.querySelector('.apikey').addEventListener('click',()=>{
  navigateTo('/ApiKey');
 });
 // Cambiar el nombre de la URL según la historia seleccionada
// const urlParams = new URLSearchParams(window.location.search);
 //urlParams.set('books', books.id);
 //history.replaceState(null, '', `${window.location.pathname}?${urlParams}`);


 container.appendChild(footer()); 
    return container;
}