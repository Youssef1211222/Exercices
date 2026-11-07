// function calculerTTC (prixHT) {
//     return prixHT * 1.20;
// }
// console.log(calculerTTC(100))


const calculerTTC = (prixHT) => {
    return prixHT * 1.20;
}
console.log(calculerTTC(300))



function afficherPrix (selecteur , prixHT) {
    const element = document.querySelector(selecteur)
    element.textContent = `HT : ${prixHT} DH . TTC : ${calculerTTC(prixHT)} DH`
}
afficherPrix ("#p1", 100)
afficherPrix ("#p2", 45)
afficherPrix ("#p3", 320)


