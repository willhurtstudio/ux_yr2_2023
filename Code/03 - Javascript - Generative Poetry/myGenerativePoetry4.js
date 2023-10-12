function Poem(array2D){ 
    this.thePoem = ""
    this.wordArray2D = array2D;
    this.randomWordFromArray = function(inputArray){
        let randomIndex = Math.floor(Math.random() * inputArray.length)
        return inputArray[randomIndex]
    },
    
    this.createPoem = function(){
        for(let i = 0; i < this.wordArray2D.length; i++){
            let currentArray = this.wordArray2D[i]
            this.thePoem += this.randomWordFromArray(currentArray) + " "
        }
    },

    this.logToConsole = function(){
        console.log(this.thePoem)
    }

    this.logToHTML = function(){
        document.getElementById("paratwo").innerHTML = this.thePoem
    }
    
}


// Declare an array using a function so we can then use the new keyword to instantiate many of them,
function WordStore(){
    this.array = [],
    this.randomWordFromArray = function(){
        let randomIndex = Math.floor(Math.random() * this.array.length)
        return this.array[randomIndex]
    },
    this.userInput = function(myPrompt, noOfWords){
        for(let i = 0; i < noOfWords; i++){
            let word = prompt(myPrompt)
            this.array.push(word)
        }
    }
}

let openings = new WordStore()

openings.userInput("enter 2 openeings", 2)

let pronouns = new WordStore()

pronouns.userInput("enter 2 pronouns", 2)

let verbs = new WordStore()

verbs.userInput("enter 2 verbs", 2)

let adverbs = new WordStore()

adverbs.userInput("enter 2 adverbs", 2) 

let myPoem = new Poem([openings.array, pronouns.array, verbs.array, adverbs.array])

myPoem.createPoem()

myPoem.logToConsole()

myPoem.logToHTML()







