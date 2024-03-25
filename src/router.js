let ROUTES ={};
let rootElement = '';//es la refrencia a nuestro HTML

export const setRootElement = (newRootElementValue) => {
    rootElement = newRootElementValue ;
  }
  

  export const setRoutes = (newroutesValue) => {
    ROUTES = newroutesValue;
    const renderView =(pathname, props={}) =>{
      //limpiar el root elemeto 
      const root = rootElement;
      root.inerHTML='';
      if (ROUTES[pathname]){
        const template = ROUTES[pathname]();
        root.appentchile(template);
      } else{
        root.appentchile(ROUTES['/error']());
      }
    }
  }
  export const navigateto =(pathname,props ={}) =>{
    const URLVisited =window.location.hostname + pathname;
    history.pushState({}, "", URLVisited);
    renderView(pathname,props);
  }

  export const onURLChange = (pathname) =>{
    renderView(pathname);
  }