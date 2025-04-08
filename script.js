let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
function mudarvisual(cor, imagem, botao) {
    tenis.classList.add("troca-efeito")
    body.style.background = cor
    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 500);
}