const imageUpload = document.getElementById("image_upload");
const startGameBtn = document.getElementById("start_game");
const gameBoard = document.getElementById("game_board");


let userImages =[];
let shuffledCards = [];
let flippedCards = [];
let matches = 0;

//image upload


imageUpload.addEventListener("change",function(e){

    userImages=[];
    const files = e.target.files;

    if(files.length < 6){
        alert("Upload atleast 6 images");
        
        return;
       
    } else if (files.length > 16 || files.length % 2 !== 0) {

        alert("Upload In even Number like 6,8,10,12,14 or Max 16 ");
        return;

    } 



    for(let file of files){

        const  imgURL = URL.createObjectURL(file);
        userImages.push(imgURL);
        console.log(imgURL);
        
    }

});

//start game

startGameBtn.addEventListener("click",()=>{

    if (userImages.length < 5 ){
        alert("Please Upload Atleast 5 Images");
        return;
    }

    setupGame();

});

function setupGame(){
    gameBoard.innerHTML = ""
    shuffledCards = shuffleCards([...userImages, ...userImages]);
    matches = 0;
    flippedCards = [];

    shuffledCards.forEach((image , index)=> {
        const card  = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;

        const img  = document.createElement("img");
        img.src = image;
        card.appendChild(img);

        card.addEventListener("click",() => flipCard(card));
        gameBoard.appendChild(card);
        

    });

}
    //shulffle card

    function shuffleCards(cards){

     return cards.sort(()=> Math.random()-0.5)
    }

    //flip card

    function flipCard(card){
        if(flippedCards.length < 2  && !card.classList.contains("is-flipped")){

            card.classList.add("is-flipped");
            card.querySelector("img").style.display = "block";
            flippedCards.push(card)
        }

        if(flippedCards.length === 2){

            setTimeout(checkMatch,800)
        }
    }
function checkMatch(){
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector("img").src;
    const img2 = card2.querySelector("img").src;

    if(img1 === img2 ){

        card1.classList.add("is-match");
        card2.classList.add("is-match");
        matches += 2;
    }
    else {
        card1.classList.remove("is-flipped");
        card2.classList.remove("is-flipped");
        card1.querySelector("img").style.display = "none";
        card2.querySelector("img").style.display = "none";
    }

    flippedCards = [];

    if (matches === shuffledCards.length) {
        setTimeout(() => confetti(), 500);
    }


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



