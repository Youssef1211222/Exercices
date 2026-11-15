const notesQ = document.querySelectorAll(".note")
console.log(notesQ)

const notes = document.getElementsByClassName("note")
console.log(notes)

const surligner = document.getElementById("surligner")

surligner.addEventListener("click" , function() {
    notesQ.forEach(function(note) {
        note.classList.toggle("bg-yellow-200")
    })
})

const notesArray = Array.from(notes)

notesArray.forEach(function(note) {
    console.log(note)
})


const lire = document.getElementById("lire")

lire.addEventListener("click" , function() {
    const theme = document.getElementsByName("theme")
    theme.forEach(function(theme) {
        if (theme.checked) {
            console.log(theme.value)
        }
    })
})
