function alertFunc() {
    alert("Hello! I am an alert box!");
}

function darkMode() {
    document.body.classList.toggle('dark-mode');
}

window.onload = function() {
    const button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        const liElements = document.getElementsByTagName("li");
        for (let i = 0; i < liElements.length; i++) {
            if (liElements[i].style.color === "magenta") {
                liElements[i].style.color = "black";
            } else {
                liElements[i].style.color = "magenta";
            }
        }
    });
}