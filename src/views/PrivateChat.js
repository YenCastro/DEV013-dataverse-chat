export const PrivateChat = () => {
    const container = document.createElement('div');
    container.innerHTML = `   
    <body>
    <div class="container">
      <button class="cerrar" aria-label="Cerrar">✖️</button>
      <div class="image-container">
        <img src=https://th.bing.com/th/id/OIG.Hx9k0_XgQwnbWEsPAQnf?pid=ImgGn.jpg" id="imagen" alt="Imagen">
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
  
    // Aquí puedes agregar la lógica para enviar mensajes, manejar eventos, etc.
  
    return container;
}