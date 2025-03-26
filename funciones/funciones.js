// script.js
const messages = {
    2017: "Nuestro primer año juntos, lleno de momentos inolvidables 💖.",
    2018: "Seguimos creciendo juntos y enfrentando nuevas aventuras. ✨",
    2019: "Un año especial donde vivimos momentos increíbles 😍.",
    2020: "A pesar de los retos, nuestro amor se hizo más fuerte 💕.",
    2021: "Cada día contigo es un regalo hermoso 🎁.",
    2022: "Un año lleno de amor, risas y momentos mágicos. ✨",
    2023: "Celebramos 7 años juntos, y cada momento ha sido único ❤️."
};

function showMessage(year) {
    document.getElementById("message-text").innerText = messages[year];
    document.getElementById("message-box").classList.remove("hidden");
}

function closeMessage() {
    document.getElementById("message-box").classList.add("hidden");
}
