var cSize = document.getElementById("text");
var start = 10;
var end = 100;
function textSize() {
  cSize.style.fontSize = `${start}px`;
  start += 10;
  if (cSize.style.fontSize == `${end}px`) {
    clearInterval(counter);
  }
}
setTimeout(textSize, 1000);
var counter = setInterval(textSize, 1000);
