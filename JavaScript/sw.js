const STATIC_CACHE = "static";
//Se declara un vector con ubicacion y nombre de los archivos que forman parte de la pagina
const APP_SHELL =[
    "/",
    "index.html",
    "styles/style.css",
    "js/main.js",
    "js/functions.js",
    "js/script1.js",
    "js/script2.js",
    "images/img.png",
];
//El evento install se agregan los archivos a la ca
self.addEventListener("install", (e) => {
    const CacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.WaitUntil(CacheStatic);
});
//El evento fetch envia los archivos a la pagina
self.addEventListener("fetch", (e) =>{
    console.log("Fectch!", e.request);

    e.respondwith(
        caches
        .match(e.request)
        .then(res => res || fetch(e.request))
        .catch(console.log)
    );
});