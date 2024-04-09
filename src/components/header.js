import { navigateTo } from "./../router.js"

export const header = () => {
  const viewEl = document.createElement('div')
  viewEl.classList.add('seccionHome')
  viewEl.innerHTML += ` 
  <h1>Cuantos Cuentos</h1> 
  <p>¡Déjate llevar por la magia de la imaginación en cada página!</p>
  </div>
  `
  return viewEl;

};


