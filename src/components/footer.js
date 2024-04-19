export const footer = () => {
  const footerPage = document.createElement("footer");
  footerPage.setAttribute("id", "footer")
  footerPage.innerHTML = `<div class="seccion3" id="render">Copyright @ 2024 Julieta y Yenny </div>`
  return footerPage;
}