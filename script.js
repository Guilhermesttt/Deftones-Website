function toggleTerms() {
    let termsButton = document.querySelector(".terms");
    let termsDescription = document.querySelector(".terms-description");

    if (termsDescription.style.display === "none" || termsDescription.style.display === "") {
        termsDescription.style.display = "block"; // Exibe a descrição
        termsButton.textContent = "hide"; // Altera o texto do botão para "hide"
    } else {
        termsDescription.style.display = "none"; // Esconde a descrição
        termsButton.textContent = "terms"; // Restaura o texto do botão para "terms"
    }
}
