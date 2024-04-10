
 import { data } from "../data/dataset.js";
  import { footer } from "../components/footer.js";
import { navigateTo } from "../router.js";
export const PrivateChat = (story) => { //mi paremtro de entrada sera el nombre y de ahi tendra la data como en home storyname
    const container = document.createElement('div');
//recuerda que ahora tu cuneto a sido almacenado en story
    container.innerHTML = `   
    <body>
    <div class="container">
      <button class="cerrar" aria-label="Cerrar">✖️</button>
      <div class="image-container">
        <img src="${story.imageUrl}" id="imagen" alt="Imagen">
        <p>${story.shortDescription} ${story.facts.curiousFact1}. ${story.facts.curiousFact2}</p>
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
 container.appendChild(footer()); 
    return container;
}