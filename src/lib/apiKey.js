// src/lib/apiKey.js

export const getApiKey = () => {
  const getStorage = localStorage.getItem("apiKey");
  return getStorage;  
  // Implementa el código para obtener la API KEY desde Local Storage
  //getApiKey se encarga de obtener la API key almacenada en el almacenamiento local del navegador
  // y devolverla. Si no hay ninguna clave "apiKey" almacenada, devuelve null.
};
 
export const setApiKey = (key) => {
  localStorage.setItem("apiKey", key);//  setItem() es una función del objeto localStorage
  //almacenar datos en el almacenamiento local del navegador web. 
  // Implementa el código para guardar la API KEY en Local StorageS
};