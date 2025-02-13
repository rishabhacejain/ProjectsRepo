let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);

const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess);

    });


}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please ENter a Valid Number")
    } else if (guess <= 0) {
        alert("Please ENter a  Number Greater than 0")
    }else if(guess > 100)
        {
        alert("Please ENter a  Number Smaller than 100")
    }else
    {
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over..<br><br> Number Was ${randomNum}` )
            endGame();
        }else{

            displayGuess(guess);
            checkGuess(guess);
        }

    }



}
function checkGuess(guess) {
    if(guess === randomNum){
        displayMessage("Voila You Guessed It Right")
        confetti()
        setTimeout(endGame(),5000)
    }else if(guess < randomNum){
        displayMessage("The NUmber IS Too Low")
    }else if(guess > randomNum){
        displayMessage("The Number Is Too High")

    }
}
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess} `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
    
    
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`



}

function endGame() {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML =`<h2 id="newGame"> Start New Game <i class="fa-solid fa-rotate-right"></i> </h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();  

}
function newGame() {
    const newGameButton = document.getElementById("newGame");
    newGameButton.addEventListener("click", function(){
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess =[];
        numGuess = 1;
        guessSlot.innerHTML = " "
        remaining.innerHTML = `${11- numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p);  
        lowOrHi.innerHTML=" "
        playGame = true;

    });

}

function confetti() {
    const duration = 3 * 1000; // 3 seconds
    const animationEnd = Date.now() + duration;
    const colors = ["#ff0", "#ff5722", "#ff00ff", "#00ffff", "#00ff00"];

    (function frame() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return;

        const particle = document.createElement("div");
        particle.classList.add("confetti"); // Apply CSS class

        // Randomize position and appearance
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.top = "-10px";

        // 🎉 Random width & height for square/rectangle effect 🎉
        const width = Math.random() * 12 + 5 + "px"; // Random width (5px to 17px)
        const height = Math.random() * 8 + 4 + "px"; // Random height (4px to 12px)
        particle.style.width = width;
        particle.style.height = height;

        // Random color
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random rotation and animation speed
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        particle.style.animationDuration = Math.random() * 3 + 2 + "s"; // Different fall speeds

        document.body.appendChild(particle);

        // Remove the particle after animation ends
        setTimeout(() => {
            document.body.removeChild(particle);
        }, 5000);

        requestAnimationFrame(frame);
    })();
}
