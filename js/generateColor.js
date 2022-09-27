// Colors palette
let palette = ["#7b49db", "#d35151", "#428de8", "#51d37a", "#e6db62"];

// Random color function
function randomColor() {
    i >= 4 ? i = 0 : i++;
    return palette[i];
}

// Links
var links = document.getElementsByClassName('link');

for (var i = 0; i < links.length; i++) {
    links[i].onmouseover = function(e) {
        this.style['color'] = randomColor();
    }  
}

// Icons
var icons = document.getElementsByClassName('coloured-icon');

for (var i = 0; i < icons.length; i++) {
    icons[i].onmouseover = function(e) {
        this.style['color'] = randomColor();
    }
}

// Buttons
var buttons = document.getElementsByClassName('coloured-button');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onmouseover = function(e) {
        this.style['background-color'] = randomColor();
        this.style['color'] = "#0c0c0c";
    }
    buttons[i].onmouseout = function(e) {
        this.style['background-color'] = "white";
        this.style['color'] = "#0c0c0c";
    }
}