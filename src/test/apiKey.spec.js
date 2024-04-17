// test/apiKey.spec.js
/* eslint-disable */
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {// Desarrolla el test correspondiente aquí
    const testKey =  "!@#abc123";
    setApiKey(testKey);
    expect(getApiKey()).toBe("!@#abc123")//toBe es un matcher que verifica si el resultado de getApiKey es exactamente igual a la nueva clave.
  });

  it('Si no existe una Key', () => {
    const nullKey ="";// este vacio 
    setApiKey(nullKey);
    expect(getApiKey()).toBe("");//debe ser igual al valor de  const = nullkey
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {// Desarrolla el test correspondiente aquí
   const testKey = "!@#abc123";
   setApiKey(testKey);
   expect(localStorage.getItem("apikey")).toBe(testKey);
  });
  it('si no hay ApiKey guardada', ()=>{
    const testKey="";//Establece una clave de prueba vacía.
    setApiKey(testKey);
    expect(localStorage.getItem("apikey")).toBe(testKey);//el valor almacenad sea igual a la clave de prueba vacía.
  });
});
