let swLocation ="sw.js";

//En el primer if identifica si el navegador
if(navigator.serviceWorker){
    //En el segundo if se identifica en que servidor se encuentra
    if(window.location.href.includes("localhost"))
    swLocation="/sw.js";
    //registra ubicacion
    navigator.serviceWorker.register(swLocation);
}