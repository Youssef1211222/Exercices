const produits = [
  { nom: 'Clavier', prix: 250, stock: 4 },
  { nom: 'Souris', prix: 90, stock: 0 },
  { nom: 'Écran', prix: 1400, stock: 2 },
  { nom: 'Tapis', prix: 60, stock: 12 }
];

function afficher (tableau) {
    const liste = document.querySelector("#liste")
    liste.textContent = ""
    tableau.forEach(produit => {
        const listeProduits = document.createElement("li")
        listeProduits.textContent = `${produit.nom} - ${produit.prix} DH`

        liste.append(listeProduits)
    });
}
afficher(produits);

const stock = document.getElementById("stock")

stock.addEventListener("click" , function (){
     const produitsFiltres = produits.filter(function(produit){
        return produit.stock > 0
    })
    afficher(produitsFiltres)
})



const petitPrix = document.getElementById("petitPrix")

petitPrix.addEventListener("click" , function() {
    const produitsFiltres = produits.filter(function(produit){
        return produit.prix < 200
    })
    afficher(produitsFiltres)
})

const combo = document.getElementById("combo");

combo.addEventListener("click" , function() {
    const produitsFiltres = produits.filter(function(produit) {
        return produit.stock > 0 && produit.prix < 200
    })
    afficher(produitsFiltres)
})

const tous = document.getElementById("tous");

tous.addEventListener("click" , function() {
    afficher(produits)
})


// Dans cet exercice, j’ai appris à utiliser `filter()` pour filtrer les produits selon différentes conditions. J’ai aussi utilisé `addEventListener` pour gérer les clics sur les boutons.

// J’ai compris qu’on peut réutiliser une seule fonction `afficher()` pour afficher différents résultats, sans répéter le même code.

// J’ai également compris que `filter()` crée un nouveau tableau sans modifier le tableau original.

// Je vais essayer de mieux maîtriser ces méthodes et de les utiliser dans mes prochains projets.

