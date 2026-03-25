portugues = document.querySelector("#mudaLingua");
textoPt = document.querySelectorAll(".portuguese");
textoEn = document.querySelectorAll(".english");

portugues.addEventListener("click", () => {
    textoPt.forEach(el => el.classList.toggle('hide'))
    textoEn.forEach(el => el.classList.toggle('hide'))
})
