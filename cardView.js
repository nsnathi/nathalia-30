
function confirmPresence() {

    const name =
        document.getElementById("name").value;

    const rg =
        document.getElementById("rg").value;

    if (!name || !rg) {

        alert("Preencha Nome e RG.");

        return;
    }
    
 const formURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSdGefFMBsUrXHkI47km5UPjVHnXBCahc5In1j6GjWh2tMT5zw/formResponse";

    const formData =
        `entry.1914616731=${encodeURIComponent(name)}` +
        `&entry.270909713=${encodeURIComponent(rg)}`;

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData
    });

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

