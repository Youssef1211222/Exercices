const courses = ['Pain', 'Lait', 'Œufs', 'Tomates'];

console.log(courses[0])

// console.log(courses[3])

console.log(courses[courses.length - 1])

console.log(courses.length)

courses.push("café")

let cont = 0;

const total = document.getElementById("total")
total.textContent = `${courses.length} articles`

const liste = document.getElementById("liste")

// for (let i = 0 ; i < courses.length ; i++) {
//     const article = document.createElement("li")
//     article.textContent = courses[i]
//     liste.appendChild(article)
// }

courses.forEach(function(course) {
    const article = document.createElement("li")
    cont ++
    article.textContent = `${cont}. ${course}` 
    liste.appendChild(article)
})




