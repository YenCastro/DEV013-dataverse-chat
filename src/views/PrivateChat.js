import { homeButton } from "../components/ButtonHome.js";
import { footer } from "../components/footer.js";


export const PrivateChat = () => {

    const container = document.createElement('div');
    //buaca el cuento en los datos
    const story = data.find(story => story.name === storyName); // lo que esta dentro d emi storyNmae sea igual al name de mi data 
    if(!story){
      container.innerHtml =`<p> El cuento "${storyName}" no se encontro.</p>`
    return container;
    }

//recuerda que ahora tu cuneto a sido almacenado en story
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