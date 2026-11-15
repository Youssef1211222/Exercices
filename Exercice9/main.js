const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 }
];

console.log(produits[1].nom)

console.log(produits[2].prix)


// function creerFiche(produit) {
//     const article = document.createElement("article")
//     article.classList.add("border", "p-4", "rounded-lg")

//     const h2 = document.createElement("h2")
//     h2.textContent = produit.nom
//     const p = document.createElement("p")
//     p.textContent = `${produit.prix} DH`

//     article.append(h2 , p)
//     if (produit.stock === 0) {
//         const rupture = document.createElement("p")
//         rupture.textContent = "Rupture"
//         rupture.classList.add("text-red-500")
//         article.append(rupture)
//     }
//     return article
// }


const catalogue = document.getElementById("catalogue")

produits.forEach(function(produit) {
    const newProduit = creerFiche(produit)
    catalogue.appendChild(newProduit)
})

function creerFiche(produit) {
    const { nom, prix, stock } = produit

    const article = document.createElement("article")
    article.classList.add("border", "p-4", "rounded-lg")

    const h2 = document.createElement("h2")
    h2.textContent = nom

    const p = document.createElement("p")
    p.textContent = `${prix} DH`

    article.append(h2, p)

    if (stock === 0) {
        const Rupture = document.createElement("p")
        Rupture.textContent = "Rupture"
        Rupture.classList.add("text-red-500")
        article.append(Rupture)
    }

    return article
}