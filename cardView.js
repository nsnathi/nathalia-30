
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

Dados para a portaria

Nome Completo:
${name}

RG:
${rg}

Acompanhante (se houver)

Nome:
RG:`;

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
