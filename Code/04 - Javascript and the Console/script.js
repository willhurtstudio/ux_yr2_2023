let myObject = {
    name: "James",
    height: 188,
    weight: 76.5,
    bmi: 0,
    calculateBMI: function() {
        let sqr = this.height * this.height; 
        this.bmi = (this.weight / sqr) * 10000; 
        //console.log("BMI: " + bmi);
    } 
}

//console.log(myObject.calculateBMI())
myObject.calculateBMI();

let myString = myObject.name + "'s BMI is " + myObject.bmi;

console.log(myString);

let dataTypes = ["apple", "banana", "fish", "apple", "banana", "fish"];

let firstFood = dataTypes[0];

console.log(firstFood); // shoudl log apple

let numberOfFoods = dataTypes.length;

console.log(numberOfFoods); // should log 6


let a = 10
let b = "ten" 

console.log(a === b); // should be false as === (three equal)

if(b == 10 || b == "eleven"){
    console.log("both equal 10")
} else {
    console.lof("they dont equal 10")
}

// ternery operators
let gems = 10;
let score = ( gems > 1 ) ? 5 : 2; // score equals 5 as gems is greater than 1

//switch statements
let difficultyLvl = 1;
let enemyHP;

switch(difficultyLvl) 
{   case 1:
        enemyHP = 5;
        break; 
    case 2:
        enemyHP = 8;
        break; 
    default:
        enemyHP = 3; 
}
console.log(enemyHP);

