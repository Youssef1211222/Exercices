




let compteur = 0;

function afficher (compteur) {
    const valeur = document.getElementById("valeur")
    valeur.textContent = compteur
}

const plus =  document.getElementById("plus")

plus.addEventListener("click" , function() {
    compteur ++
    afficher(compteur)
})

const moins = document.getElementById("moins")

moins.addEventListener("click" , function () {
    if (compteur > 0 ){
        compteur --
    }
    afficher(compteur)
})

const reset = document.getElementById("reset")

reset.addEventListener("click" , function () {
    compteur = 0
    afficher(compteur)
})

