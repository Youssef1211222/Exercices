const stock = 5;

const badge =  document.querySelector("#badge");

badge.textContent = stock > 3 ? "Disponible" : stock > 0 ? "Presque épuisé" : "Rupture"

if (stock > 3) {
    badge.classList.add("bg-green-200");
}else if (stock > 0) {
    badge.classList.add("bg-yellow-200")
}else {
    badge.classList.add("bg-red-200")
}



