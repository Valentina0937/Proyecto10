//Con clase es . con id es #
const navegacion =document.querySelector("#menu");
const abrir =document.querySelector("#abrir");
const cerrar =document.querySelector("#cerrar");

//Evento de escucha
abrir.addEventListener("click", ()=>{
    navegacion.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    navegacion.classList.remove("visible");
})