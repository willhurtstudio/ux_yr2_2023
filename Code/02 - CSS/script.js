
let myToggle = false;

function toggleBody(){
    
    let theElement = document.getElementById("theBody");

    myToggle = !myToggle;
    console.log(myToggle);

    if(myToggle == true){
        theElement.classList.add("clickedStyle");
    } else {
        theElement.classList.remove("clickedStyle");
    }

}