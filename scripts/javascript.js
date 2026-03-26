portugues = document.querySelector("#mudaLingua");
ingles = document.querySelector("#mudaLingua2")
textoPt = document.querySelectorAll(".portuguese");
textoEn = document.querySelectorAll(".english");

portugues.addEventListener("click", () => {
    textoPt.forEach(el => el.classList.toggle('hide'))
    textoEn.forEach(el => el.classList.toggle('hide'))
})

ingles.addEventListener("click", () => {
    textoPt.forEach(el => el.classList.toggle('hide'))
    textoEn.forEach(el => el.classList.toggle('hide'))
})