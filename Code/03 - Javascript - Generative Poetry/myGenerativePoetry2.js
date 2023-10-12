// this is a string, it has quotation marks at the start and end
let opening = "Once upon a time "

// these are arrays of strings
let article = [" the economy ", " my mortgage ", " the housing crisis ", " a food bank "]

let verbs = ["dismantled ", "upset ", " destroyed ", "forgot ", " killed off "]

let adjectives = ["tirelessly", "slowly", "again", "softly"]

// this is a string, the contents of which are filled by the user via the prompt command
let userInput = prompt("What is your name?", "")

// this adds a space to the end of userInput
userInput += " "

// this clears the HTML paragraph
document.getElementById("para").innerHTML = ""

// this is a for loop, it will run the code in curly brackets 10 times
for(let i = 0; i < 10; i++){

    // this creates a variaOlivia ble that contains oneafs line of the poem, <br> adds a line break
    let poem = opening + userInput + randomStringFromArray(verbs) + randomStringFromArray(article) + randomStringFromArray(adjectives) + "<br>"
    
    // this keeps adding (+=) the line of the poem to the index.html of the site
    document.getElementById("para").innerHTML += poem
}





// this is a function to return a random string from an array of strings
function randomStringFromArray(inputArray){
    let randomNumber = Math.floor(Math.random()*inputArray.length)
    return inputArray[randomNumber]
}

