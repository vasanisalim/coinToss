const audio = new Audio("flip.mp3");            //create a new audio object
const image = document.querySelector("img");    //get a handle on the image element
const displayText = document.querySelector("h3");   //get a handle on the h3 element
const flipButton = document.querySelector("#flipButton");   //get a handle on the button element
flipButton.addEventListener("click", flipCoin3);     //add a click event to button. Call function flipCoin

//this is the simplest version
function flipCoin1(){
    displayText.innerHTML = "";                     //clear the display area
    audio.play();                                   //play flip sound
    let coin = Math.floor(Math.random()*2);         //generate random number between 0 and 1
    
    //if number is zero, show Heads. else show tails
    if(coin==0){    
        displayText.innerHTML = "You got Heads!";       //set text in h3
        image.src="heads.png";                          //set image src
    } else {
        displayText.innerHTML = "You got Tails!";
        image.src = "tails.png";
    }
}


//this is same as above but show result after 1 sec
//use setTimeout
function flipCoin2(){
    displayText.innerHTML = "";
    audio.play();
    setTimeout(function(){
        let coin = Math.floor(Math.random()*2);
        if(coin==0){
            displayText.innerHTML = "You got Heads!";
            image.src="heads.png";
        } else {
            displayText.innerHTML = "You got Tails!";
            image.src = "tails.png";
        }
    }, 1000);
}


//toggle between heads and tails while awaiting result. use setInterval
function flipCoin3(){
    displayText.innerHTML = "";
    audio.play();
    
    let currentState = "heads";
    let rollingAnimator = setInterval( ()=> {
        if(currentState === "heads"){
            image.src = currentState + ".png";
            currentState = "tails";
        } else{
            image.src = currentState + ".png";
            currentState = "heads";
        }
    }, 150);

    setTimeout(()=>{
        clearInterval(rollingAnimator);
        let coin = Math.floor(Math.random()*2);
        if(coin==0){
            displayText.innerHTML = "You got Heads!";
            image.src="heads.png";
        } else {
            displayText.innerHTML = "You got Tails!";
            image.src = "tails.png";
        }
    }, 1000);
}