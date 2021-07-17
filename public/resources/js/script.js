
var i = 0;
var txt = ' healthy meals.'; /* The text */
var speed = 300; /* The speed/duration of the effect in milliseconds */
typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("changeContent").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("changeContent").innerHTML = '';
    i = 0;
    typeWriter();
  }
}