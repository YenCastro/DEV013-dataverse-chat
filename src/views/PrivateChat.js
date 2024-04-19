import { footer } from "../components/footer.js";
import { navigateTo } from "../router.js";
import { communicateWithOpenAI } from '../Lib/openAIApi.js';
import { data } from '../data/dataset.js';

// Función para mostrar mensajes en el contenedor de chat
function displayMessage(message, isUserMessage) {
  const chatMessagesContainer = document.querySelector('.chat-messages');
  const messageElement = document.createElement('div');
  
  // Asignar clases dependiendo del tipo de mensaje
  if (isUserMessage) {
    messageElement.classList.add('user-message');
  } else {
    messageElement.classList.add('api-message');
  }
  
  messageElement.textContent = message;
  chatMessagesContainer.appendChild(messageElement);

}

export const PrivateChat = (books) => {
  const container = document.createElement('div');
  container.id = "PrivateChat";
  const findbook = data.find((booksId) => booksId.id === books.id)

  container.innerHTML = `   
    <div class="container">
      <button class="cerrar" aria-label="Cerrar">✖️</button>
      <div class="image-container">
        <h4>${findbook.name}</h4>
        <img src="${findbook.imageUrl}" id="imagen" alt="${findbook.name}">
        <p id="informationBooks">${findbook.shortDescription} ${findbook.facts.curiousFact1}. ${findbook.facts.curiousFact2}</p>
      </div>
      <div class="chat-container">
        <div class="chat-messages" id="chat-messages"></div>
      </div>
      <div id="input-container">
        <input type="text" id="message-input" placeholder="Escribe un mensaje...">
        <button id="send-button">Enviar</button>
      </div>
    </div>
  `;

  container.querySelector('.cerrar').addEventListener('click', () => {
    navigateTo('/Home');
  });


  container.querySelector('#send-button').addEventListener('click', () => {
    const userInput = container.querySelector('#message-input').value;
  
    // Mostrar el mensaje del usuario en el chat y marcarlo como del usuario
    displayMessage(userInput, true); // true indica que es un mensaje del usuario
  
    // Limpiar el input después de enviar el mensaje
    container.querySelector('#message-input').value = '';

    // Comunicarse con OpenAI y mostrar la respuesta en el chat
    communicateWithOpenAI(findbook.name, userInput)
      .then((response) => {
        const aiResponse = response.choices[0].message.content;
        displayMessage(aiResponse);
      })
    
  });

  container.appendChild(footer());
  return container;
};
