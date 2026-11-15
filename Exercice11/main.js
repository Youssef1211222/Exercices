const message = document.getElementById("message")

message.addEventListener("input" , function() {
    const compteur = document.getElementById("compteur")
    const envoyer = document.getElementById("envoyer")
    let nombre = message.value.trim().length
    compteur.textContent = `${nombre} / 50`
    if (nombre >50) {
        compteur.classList.add("text-red-600")
    }else {
        compteur.classList.remove("text-red-600")
    }

    if (nombre === 0 || nombre > 50) {
        envoyer.disabled = true
    }else {
        envoyer.disabled = false
    }
})