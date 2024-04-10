import { data } from '../data/dataset.js'; // Importa los datos primero
import { footer } from "../components/footer.js";

export const PrivateChat = (books) => {
    const container = document.createElement('div');
    // Busca el cuento en los datos
    const story = data.find(story => story.name === books); // Llama a la función data para obtener el array de datos
    if(!story){
      container.innerHTML = `<p> El cuento "${books}" no se encontró.</p>`;
    return container;
    }
  

//recuerda que ahora tu cuento a sido almacenado en story
    container.innerHTML = `   
    <body>
    <div class="container">
      <button class="cerrar" aria-label="Cerrar">✖️</button>
      <div class="image-container">
        <img src="${story.imageUrl}" id="imagen" alt="Imagen">
        <p>${story.shortDescription} </p>
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

 container.appendChild(footer()); 
    return container;
}