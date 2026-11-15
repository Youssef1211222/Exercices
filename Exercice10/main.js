const message =  '<img src=x onerror="alert(1)">';

const go = document.getElementById("go");

go.addEventListener("click" , function() {
    const zoneTexte = document.getElementById("zoneTexte")
    zoneTexte.textContent = message
})

go.addEventListener("click" , function() {
    const zoneHtml = document.getElementById("zoneHtml")
    zoneHtml.innerHTML = message   
    zoneHtml.innerHTML += `Fin` 
    console.log(zoneHtml.innerHTML)
})


