// console.log('JS connecté')

const nom = "Clavier"

let prix = 250

const htmlNom = document.getElementById("nom")
const htmlPrix = document.getElementById("prix")

htmlNom.textContent = nom
htmlPrix.textContent = prix + " " + "DH"

prix = 199

htmlPrix.textContent = prix + " " + "DH"

// nom = "youssef"
