let otp = "";
let wheel;

function sendOTP() {
    const phone = document.getElementById("phone-input").value;
    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }
    otp = Math.floor(1000 + Math.random() * 9000).toString();
    alert("Your OTP is: " + otp); // Replace with real SMS in production
    document.getElementById("otp-section").classList.remove("hidden");
}

function verifyOTP() {
    const entered = document.getElementById("otp-input").value;
    if (entered === otp) {
        document.getElementById("login-section").classList.add("hidden");
        document.getElementById("spin-section").classList.remove("hidden");
        setupWheel();
    } else {
        alert("Invalid OTP. Please try again.");
    }
}

function setupWheel() {
    wheel = new Winwheel({
        canvasId: "wheelCanvas",
        numSegments: 6,
        outerRadius: 140,
        segments: [
            { fillStyle: "#FFD700", text: "🍿" },
            { fillStyle: "#FFA500", text: "🍿🥤" },
            { fillStyle: "#FFB347", text: "🎟️" },
            { fillStyle: "#FF6347", text: "🍕" },
            { fillStyle: "#ADFF2F", text: "🧋" },
            { fillStyle: "#F08080", text: "🎰" }
        ],
        animation: {
            type: "spinToStop",
            duration: 5,
            spins: 8,
            callbackFinished: showResult,
        },
    });
}

function spinWheel() {
    document.getElementById("tagline").textContent = "";
    document.getElementById("result").textContent = "";
    wheel.stopAnimation(false);
    wheel.rotationAngle = 0;
    wheel.startAnimation();
}

function showResult(segment) {
    if (segment.text == "🍿") {

        document.getElementById("tagline").textContent = "At Roongta Cinema You Have Better Luck Everytime";
        document.getElementById("result").textContent = `You won:Small Popcorn For Rs 100`;
    }

    else if (segment.text == "🍿🥤") {
        document.getElementById("tagline").textContent = "At Roongta Cinema You Have Better Luck Everytime";
        document.getElementById("result").textContent = `You won:Rs 100 off on Unlimited Popcorn For Next Time You Visit Us. Valid For 3 Months`;
    }

    else if (segment.text == "🎟️") {


        document.getElementById("tagline").textContent = "At Roongta Cinema You Have Better Luck Everytime";
        document.getElementById("result").textContent = `You won: Movie Ticket For Just RS 100. Valid For 3months`;
    }


    else if (segment.text == "🍕") {

        document.getElementById("tagline").textContent = "At Roongta Cinema You Have Better Luck Everytime";
        document.getElementById("result").textContent = `You won:100% Free Pizza Small Size(Serves 1) Can be Redeemed Now`;

    }
    else if (segment.text == "🧋") {

        // document.getElementById("tagline").textContent = "At Roongta Cinema You Have Better Luck Everytime";

        document.getElementById("result").textContent = `You won:Two Cold Coffee For 100 On MOQ of 200RS`;
    }
    else if (segment.text == "🎰") {

        document.getElementById("tagline").textContent = "At Roongta Cinema You Have Better Luck Everytime";
        document.getElementById("result").textContent = `You won:One more Spin 100% Free`;
    }
}
