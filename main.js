const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let painting = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "black";
context.lineWidth = 5;
context.lineCap = "round";

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  context.beginPath();
}

function draw(e) {
  if (!painting) return;

  context.lineWidth = 5;
  context.lineCap = "round";

  context.lineTo(e.clientX, e.clientY);
  context.stroke();
  context.beginPath();
  context.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);
