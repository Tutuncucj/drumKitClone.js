// Tıklamaları algıla
let numberOfDrumButtons = document.querySelectorAll(".drum").length

for (let i = 0; i < numberOfDrumButtons; i++){
    
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    makeSound(this.innerHTML)
    buttonAnimation(this.innerHTML)

    }); 
}

// Tuşları algıla

// Sayfayı dinle tuşları parametre olarak dışarı aktar.
document.addEventListener("keypress",function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

// Hangi tuşa basılmışsa, ona uygun aksiyonu yap.
function makeSound(key){

    let voiceOne = new Audio("sounds/tom-1.mp3");
    let voiceTwo = new Audio("sounds/tom-2.mp3")
    let voiceThree = new Audio("sounds/tom-3.mp3")
    let voiceFour = new Audio("sounds/tom-4.mp3")
    let voiceFive = new Audio("sounds/snare.mp3")
    let voiceSix = new Audio("sounds/crash.mp3")
    let voiceSeven = new Audio("sounds/kick-bass.mp3")

    switch (key) {
        case "w": 
            // let changeColorW =  document.querySelector(".w")
            // changeColorW.classList.toggle("change-color")
            voiceOne.play(); 
        break;

        case "a":
            voiceTwo.play();
        break;

        case "s":
            voiceThree.play();
        break;

        case "d":
            voiceFour.play();
        break;

        case "j":
            voiceFive.play();
        break;

        case "k":
            voiceSix.play();
            break;

        case "l":
            voiceSeven.play();
            break;

        default: console.log(buttonInnerHTML)
            break;
    }
  
}    

// Tuşa basıldığında animasyon ekliyoruz.

function buttonAnimation(currentKey){
  let activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");
  activeButton.classList.toggle("change-color")
  
//   animasyonun süreceği zamanı belirledik.
  setTimeout(() => {
      activeButton.classList.remove("pressed")
      
  }, 100);

}