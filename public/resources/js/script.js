let i = 0;
let txt = " healthy meals."; /* The text */
let fSpeed = 400; /* The speed/duration of the effect in milliseconds */
let rSpeed = 100; /* The speed/duration of the effect in milliseconds */
typeWriterForward();

function typeWriterForward() {
    if (i != txt.length - 1) {
        document.getElementById("changeContent").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterForward, fSpeed);
    } else {
        i = txt.length;
        typeWriterReverse();
    }
}

function typeWriterReverse() {
    if (i > -1) {
        document.getElementById("changeContent").innerHTML = document
            .getElementById("changeContent")
            .innerHTML.slice(0, i);
        i--;
        setTimeout(typeWriterReverse, rSpeed);
    } else {
        typeWriterForward();
    }
}