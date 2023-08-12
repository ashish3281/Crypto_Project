window.addEventListener("load", function () {
    setTimeout(function open(event) {
        var popup = document.querySelector(".popup");
        popup.style.opacity = "1"; // Set initial opacity to 0 in CSS
        popup.style.display = "block";
        fadeIn(popup, 300); // Call the fadeIn function
    }, 1000);
});

document.querySelector("#close").addEventListener("click", function () {
    var popup = document.querySelector(".popup");
    fadeOut(popup, 300); // Call the fadeOut function
    setTimeout(function () {
        popup.style.display = "none";
    }, 300);
});

// Function to fade in an element
function fadeIn(element, duration) {
    var opacity = 0;
    var interval = 10;
    var gap = interval / duration;

    element.style.display = "block";
    element.style.opacity = opacity;

    function increaseOpacity() {
        opacity += gap;

        if (opacity >= 1) {
            clearInterval(fading);
        }

        element.style.opacity = opacity;
    }

    var fading = setInterval(increaseOpacity, interval);
}

// Function to fade out an element
function fadeOut(element, duration) {
    var opacity = 1;
    var interval = 10;
    var gap = interval / duration;

    function decreaseOpacity() {
        opacity -= gap;

        if (opacity <= 0) {
            clearInterval(fading);
            element.style.display = "none";
        }

        element.style.opacity = opacity;
    }

    var fading = setInterval(decreaseOpacity, interval);
}
