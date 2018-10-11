document.addEventListener("DOMContentLoaded", onLoadAnimations)

function animateValue(elem, start, end, duration) {
    var stepTime = 25;
    var current = 0;
    var increments = Math.floor(duration / stepTime);
    var range = end - start;

    var timer = setInterval(function() {
        current++;
        elem.innerHTML = Math.floor(start + range / increments * current);
        if (current >= increments) {
            clearInterval(timer);
        }
    }, stepTime);
}

function onLoadAnimations() {
    var anims = document.getElementsByClassName("");
    for (var i in anims) {
        var anim = anims[i];
        animateValue(anim, 0, anim.innerHTML, 1500);
    }
}