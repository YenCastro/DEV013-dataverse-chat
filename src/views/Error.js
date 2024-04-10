import { homeButton } from "../components/ButtonHome.js";
import { footer } from "../components/footer.js";

export const Error = () => {
  const ErrorPage = document.createElement("div");
  ErrorPage.className = "errorText";

  const errorPageImg = document.createElement("img");
  errorPageImg.className = "errorpageImg";
  errorPageImg.src = "img/error.jpeg";
  errorPageImg.alt = "Error 404"

  ErrorPage.appendChild(errorPageImg);

  const errorTextPage = document.createElement("p");
  errorTextPage.className="errorTextPage"
  errorTextPage.innerHTML= "<strong>¡Cuidado! Sitio no encontrado</strong>";

  return ErrorPage;
};