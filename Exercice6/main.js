
const ajouter =  document.querySelector("#ajouter")

const notes = document.getElementById("notes")

let x = 0;

ajouter.addEventListener("click" , function() {
    x++;
    const li = document.createElement("li")
    li.classList.add("p-2", "bg-yellow-100" , "rounded")
    li.textContent = `Note n° ${x}`
    console.log(li)
    notes.appendChild(li)
    console.log(li)
    
})
