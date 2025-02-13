const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e) {
        if (e.target.id === "yellow") {

            body.style.backgroundColor = window.getComputedStyle(e.target).getPropertyValue("background-color");
            body.style.color = "#212121";


        } else if (e.target.id === "blue") {

            body.style.backgroundColor = window.getComputedStyle(e.target).getPropertyValue("background-color");
            body.style.color = "#fff";

        } else if (e.target.id === "black") {
            body.style.backgroundColor = window.getComputedStyle(e.target).getPropertyValue("background-color");
            body.style.color = "#fff";



        }
        else if (e.target.id === "white") {

            body.style.backgroundColor = window.getComputedStyle(e.target).getPropertyValue("background-color");
            body.style.color = "#212121";


        }
        else if (e.target.id === "grey") {

            body.style.backgroundColor = window.getComputedStyle(e.target).getPropertyValue("background-color");
            body.style.color = "#212121";


        }

    });



});