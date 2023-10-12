// this is a string, it has quotation marks at the start and end
document.getElementById("para").innerHTML = ""

let opening = prompt("How does the poem begin?", "")


document.getElementById("para").innerHTML += opening + "<br>"

let userName = prompt("Who is the poem about?", "")

document.getElementById("para").innerHTML += userName + "<br>"

// these are arrays of strings
let article = [" the economy ", " my mortgage ", " the housing crisis ", " a food bank "]

let verbs = ["dismantled ", "upset ", " destroyed ", "forgot ", " killed off "]

let adjectives = ["tirelessly", "slowly", "again", "softly"]

let poem = randomStringFromArray(verbs) + "<br>" + randomStringFromArray(article) + "<br>" + randomStringFromArray(adjectives) + "<br>"

document.getElementById("para").innerHTML += poem + "<br>"


// this is a function to return a random string from an array of strings
function randomStringFromArray(inputArray){
    let randomNumber = Math.floor(Math.random()*inputArray.length)
    return inputArray[randomNumber]
}

