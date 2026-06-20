
function confirmPresence() {

    const name =
        document.getElementById("name").value;

    const rg =
        document.getElementById("rg").value;

    if (!name || !rg) {

        alert("Preencha Nome e RG.");

        return;
    }

    const message =
`Olá Nathália!

Confirmo minha presença no seu aniversário de 30 anos.

Nome Completo: ${name}

RG: ${rg}`;

    const phone = "5519983740174";

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

    document
        .getElementById("thankYouSection")
        .classList.remove("hidden");

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}
