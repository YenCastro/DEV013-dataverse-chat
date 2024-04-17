import { footer } from "../components/footer.js";
import { navigateTo } from "../router.js";
import { communicateWithOpenAI } from '../lib/openAIApi.js';
import { data } from '../data/dataset.js';

// Función para mostrar mensajes (debes definirla en otro lugar)
function displayMessage(message) {
  // Código para mostrar el mensaje en el chat
  const chatMessagesContainer = document.querySelector('.chat-messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatMessagesContainer.appendChild(messageElement);//mensaje creado se agrega como hijo del contenedor de mensajes de chat utilizando 
}

export const PrivateChat = (books) => {// Busca el cuento en los datos
  // Recuerda que ahora tu cuento ha sido almacenado en story
  const container = document.createElement('div');
  container.id = "PrivateChat";
  const findbook = data.find((booksId) => booksId.id === books.id)

  container.innerHTML = `   
    <div class="container">
      <button class="cerrar" aria-label="Cerrar">✖️</button>
      <div class="image-container">
      <h4> ${findbook.name} </4>
        <img src="${findbook.imageUrl}" id="imagen" alt="${findbook.name}">
        <p>${findbook.shortDescription} ${findbook.facts.curiousFact1}. ${findbook.facts.curiousFact2}</p>
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

  container.querySelector('.cerrar').addEventListener('click', () => {
    navigateTo('/Home');
  });


  // Agrega el event listener al botón de enviar mensaje
  container.querySelector('#send-button').addEventListener('click', () => {//tiene un cuerpo asíncrono, lo que significa que puede contener operaciones asíncronas, como llamadas a funciones que devuelven promesas 
    const userInput = container.querySelector('#message-input').value;//Cuando el usuario hace clic en el botón de enviar mensaje, se ejecuta una función de evento async.
    console.log(findbook.name)
  
    communicateWithOpenAI(findbook.name, userInput)//La palabra clave await se usa para esperar a que una promesa se resuelva
      .then((response) => {// Muestra la respuesta en el chat
        displayMessage(response.choices[0].message.content);// Si la llamada a la función communicateWithOpenAI es exitosa el código intenta mostra la respuesta en el chat
      })

      .catch(error => {  //Si se produce un error, en lugar de que el programa se bloquee, se ejecutará el código dentro del bloque catch, donde el error se imprimirá en la consola.
        console.error('Error al comunicarse con OpenAI:', error);
      })
  });

  container.appendChild(footer());
  return container;
};
