let allBtns = document.querySelectorAll(".drum");

allBtns.forEach((element)=>{
    element.addEventListener("click", function()
    {
        playSound(this.innerHTML);
        animateButton(this.innerHTML);

    });
});

document.addEventListener("keydown", function(e){
    playSound(e.key);
    animateButton(e.key);
});

function playSound(key){
    switch(key)
    {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        default:
            console.log(this.innerHTML);
    }
}
function animateButton(btn)
{
    let currBtn = document.querySelector("."+btn);
    currBtn.classList.add("pressed");
    setTimeout(function (){
        currBtn.classList.remove("pressed")
    }, 100);
} 


