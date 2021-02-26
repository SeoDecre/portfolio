i = 0;

function randomColor() {
    let palette = ["#7b49db", "#428de8", "#d35151", "#51d37a", "#e6db62"];
    i++;
    if (i > 4)
        i = 0;

    return palette[i];
}

colorfulIcon = document.getElementsById("colorful");

colorfulIcon.addEventListener('mouseover', event => {
    event.target.style.color = randomColor();
});