import { communicateWithOpenAI } from "../src/Lib/openAIApi.js"
/* eslint-disable */

describe("funcion de OpenAi",() => {
    it('Debería responder la función communicateWithOpenAi', () => {
        const response = {choices: [{messages: {content: "Esta es la Respuesta" } }], ok: true}
        global.fetch = jest.fn(() => {//global represnta un entrono global en torno a la ejecucion todo lo que intarctue en este caso con fetch 
            return Promise.resolve({// crea una promesa resuelta con dos propiedades
               ok: true, json: () => Promise.resolve({response}),//para extraer el cuerpo de la respuesta como JSON
            })
        });

        const dataFech = communicateWithOpenAI("Esta es la Respuesta", { id: "nausicaa-del-valle-del-viento",})
        return dataFech.then(result => {
            expect(typeof(result)).toEqual("object");  
        });
    })

    it("Deberia devolver Error", () => {
        global.fetch = jest.fn(() => {
            return Promise.reject({
               json: () => Promise.reject(new Error('Hay un error con la respuesta')),
            })
        });
        
        const dataFech = communicateWithOpenAI("Esta es la Respuesta", { id: "nausicaa-del-valle-del-viento",})
        return dataFech.catch(error => {
          expect(typeof(error)).toEqual('object');
        });
    })   
});