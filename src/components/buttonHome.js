// Regresa a Home
import { footer } from '../components/footer.js';
import { navigateTo } from '../router.js';

export const homeButton = () => {

  const buttonError = document.createElement('button');
  buttonError.className = "btnError";
  btnError.addEventListener('click', () => navigateTo("/", {}));
  buttonError

  viewError.appendChild(buttonError);
  viewError.appendChild(footer());

  return homeButton;
}