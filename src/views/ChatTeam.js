
export const ChatTeam = () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <h2>Chat Grupal</h2>
      <div id="chat-messages">
        <!-- Aquí se mostrarán los mensajes del chat -->
      </div>
      <input type="text" id="message-input" placeholder="Escribe un mensaje...">
      <button id="send-button">Enviar</button>
    `;
  
    // Aquí puedes agregar la lógica para enviar mensajes, manejar eventos, etc.
  
    return container;
  }
  