const words = [
    "Full Stack Developer",
    "React.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS"
];
let i = 0;
let counter;
function typeNow() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            document.getElementById("typer").innerHTML += word.shift();
        } else {
            deleteNow();
            return false;
        }
        counter = setTimeout(loopTyping, 225);
    };
    loopTyping();
}
function deleteNow() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.getElementById("typer").innerHTML = word.join("");
        } else {
            if (words.length > i + 1) {
                i++;
            } else {
                i = 0;
            }
            typeNow();
            return false;
        }
        counter = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
}
typeNow();