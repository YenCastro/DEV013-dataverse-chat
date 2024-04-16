import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (cardNameSystem, input) => {//sedeclara como una función asíncrona async
  const apiKey = getApiKey();//obtener la clave de la API de algún lugar. 
console.log(apiKey)
   
    const response =  fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",//Se configura la solicitud con el método POST y se le pasan los datos necesarios:
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey//Se especifica el tipo de contenido como JSON y se incluye la autorización con una clave de API variable apiKey
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [  // lista de mensajes messages
          {
            role: "system",
            content: `Tú nombre es ${cardNameSystem} eres el personaje principal del cuento elegido contesta de manera concisa y en primera persona.`
          },// mensaje generado por el sistema.
          {
            role: "user",//mensaje por el susuario
            content: input,
          },
        ],
      }),
    })
//reponse el objeto que se obtiene como resultado de una solicitud HTTP

.then((response)=> response.json())
.then((data) => {
  return data
  })
.catch(error => {
  console.log(error)
})

    const responseData =  response.json();
    return responseData; // Cambiado para devolver el objeto completo
   //catch (error) {
   // console.error('Error al comunicarse con OpenAI:', error);
    //throw error;
 // }
};
