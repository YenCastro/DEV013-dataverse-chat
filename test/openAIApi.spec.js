// test/openAIApi.spec.js
import { communicateWithOpenAI } from '../src/lib/openAIApi.js';
const global = {};
describe('Comunicacion de OpenAI', () => {
  it('Se espera que responda el personaje ', () => {
    const response = { choices: [{ messages: { content: "Esta es la respues" } }], ok: true }
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: true, json: () => Promise.resolve({ response }),
      })
    });
    const datafech = communicateWithOpenAI("Esta e sla respuesta", { id: "Pinocho", })
    return datafech.then(result => {
      expect(typeof (result)).toEqual("object");
    });
  })
  it("Deberia devolver Error", () => {
    global.fetch = jest.fn(() => {
      return Promise.reject({
        json: () => Promise.reject(new Error('Hay un error con la respuesta')),
      })
    });
    const datafech = communicateWithOpenAI("Esta e sla respuesta", { id: "Pinocho", })
    return datafech.catch(error => {
      expect(typeof (error)).toEqual('object');
    });
  })
});