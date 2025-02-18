//random color


const randomColor = function () {

    const colors = {
        
        blue: [0, 0, 255],       // Bright Blue
        fuchsia: [255, 0, 255],  // Bright Magenta
        gold: [255, 215, 0],     // Bright Yellow-Gold
        green: [0, 255, 0],      // Bright Green
        lime: [0, 255, 0],       // Lime Green
        orange: [255, 165, 0],   // Bright Orange
        pink: [255, 105, 180],   // Bright Pink
        red: [255, 0, 0],        // Bright Red
        yellow: [255, 255, 0],   // Bright Yellow
        violet: [238, 130, 238], // Bright Violet
        chartreuse: [127, 255, 0], // Bright Chartreuse Green
        turquoise: [64, 224, 208], // Bright Turquoise
        coral: [255, 127, 80],   // Bright Coral
        aquamarine: [127, 255, 212] // Bright Aquamarine
    
    };
    // Get all color keys (names) from the object
    const colorNames = Object.keys(colors);

    // Pick a random color name
    const randomColorName = colorNames[Math.floor(Math.random() * colorNames.length)];

    // Get the RGB values of the selected color
    const [r, g, b] = colors[randomColorName];

    // Return the RGB color
    return `rgb(${r}, ${g}, ${b})`;

}


let intervalID;

function ChangeBgColor() {
    document.body.style.backgroundColor = randomColor();
}


const startChangingColor = async function () {

    if (!intervalID) {

        intervalID = setInterval(ChangeBgColor, 50)
    }
}


const stopChangingColor = function () {

    clearInterval(intervalID);
    intervalID = null;

}

const popWarning = async function(){
    return  new Promise((resolve) =>{

  
  const popWarn =  document.getElementById('flash-warning');
    const acceptWarn =  document.getElementById('accept-warning');

    popWarn.style.display = "flex";

    acceptWarn.addEventListener("click", function(){
        popWarn.style.display = "none";
        resolve();
        
    }, { once: true });

    });

};

const btn = document.querySelector("#btn");
let isPlaying = false;


btn.addEventListener("click", async function () {
    const icon = btn.querySelector("i");

    if (isPlaying) {

        icon.classList.replace("fa-circle-pause", "fa-circle-play")
        stopChangingColor();



    }
    else {
        icon.classList.replace("fa-circle-play", "fa-circle-pause")
       await popWarning();
       startChangingColor();

    }
    isPlaying = !isPlaying;

});

