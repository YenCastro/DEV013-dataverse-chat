//En este documento estan mis funciones donde le doy valor a las variables ROUTES Y rootElement

let ROUTES ={};
let rootElement = '';//es la refrencia a nuestro HTML

export const setRootElement = (newRootElementValue) => {
    rootElement = newRootElementValue ;
  }
  

  export const setRoutes = (newRoutesValue) => {
    if (typeof newRoutesValue === "object"){
      if(newRoutesValue["/Home"]){
          ROUTES = newRoutesValue;
      }
    }
}


    const renderView =(pathname, props = {}) =>{
    const root = rootElement;
      root.innerHTML = '';
      if (ROUTES[pathname]){
        const template = ROUTES[pathname](props);
        root.appendChild(template);
      } else{
        root.appendChild(ROUTES['/Home'](props));
      }
    }
  
  export const navigateto =(pathname,props ={}) =>{
    const URLVisited =window.location.hostname + pathname;
    history.pushState({}, "", URLVisited);
    renderView(pathname,props);
  }

  export const onURLChange = (location) =>{
 renderView(location);
  }


