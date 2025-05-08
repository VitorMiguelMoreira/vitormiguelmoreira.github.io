document.addEventListener("DOMContentLoaded", function(){

let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".video");

botaoSom.addEventListener("click", ligaSom);

function ligaSom() {
    video.muted = false
}

let botaoMute = document.querySelector(".botao-mute")

botaoMute.addEventListener("click", mutaSom)

function mutaSom(){
    video.muted = true
}

let botaoInfo = document.querySelector(".link-info");
let modal = document.querySelector(".modal");

botaoInfo.addEventListener("click", mostraInfo);

 function mostraInfo(){
    event.preventDefault();
    modal.style.display = "block";
}

let botaoFecha = document.querySelector(".botao-fecha")

botaoFecha.addEventListener("click", fechaInfo)

function fechaInfo() {
    modal.style.display = "none";
}

});