import { footer } from "../components/footer.js";
export const PrivateChat = (data) => {
    const container = document.createElement('div');
    container.innerHTML = `   
    <body>
    <div class="container">
      <button class="cerrar" aria-label="Cerrar">✖️</button>
      <div class="image-container">
        <img src="${element.imageUrl} id="imagen" alt="Imagen">
        <p>${element.shortDescription} </p>
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
 //const selectedStory=data[selectedStory];
 //const PrivateChatContainer = PrivateChat(selectedStory); 
    // Aquí puedes agregar la lógica para enviar mensajes, manejar eventos, etc.
  
    return container;
}