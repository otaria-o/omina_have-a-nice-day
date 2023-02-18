console.log("omina");

var canvas = document.getElementById("omina");
var context = canvas.getContext("2d");

context.strokeStyle = "black";
context.lineWidth = 5;

//head
context.arc(250, 70, 30, 0, Math.PI * 2);
context.stroke();

//body
context.beginPath();
context.moveTo(250, 100);
context.lineTo(250, 200);

//arms
context.moveTo(250, 120);
context.lineTo(230, 200);

context.moveTo(250, 120);
context.lineTo(270, 200);

context.stroke();

//legs
context.fillStyle = "black";
context.moveTo(250, 198);
context.lineTo(320, 290);
context.lineTo(190, 290);
context.closePath();
context.fill();

//shoes
context.fillStyle = "red";
context.beginPath();
context.moveTo(230, 290);
context.lineTo(200, 300);
context.lineTo(230, 300);
context.closePath();
context.fill();

context.fillStyle = "red";
context.beginPath();
context.moveTo(270, 290);
context.lineTo(300, 300);
context.lineTo(270, 300);
context.closePath();
context.fill();

context.closePath();

// drück langsam "omina" auf die Tastatur

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "o":
      context.beginPath();
      context.fillStyle = "yellow";
      context.arc(70, 50, 30, 0, Math.PI * 2);
      context.closePath();
      context.fill();
      break;

    case "m":
      context.beginPath();
      context.fillStyle = "red";
      context.arc(250, 73, 5, 0, Math.PI);
      context.closePath();
      context.fill();
      break;

    case "i":
      context.beginPath();
      context.fillStyle = "black";
      context.moveTo(240, 60);
      context.lineTo(235, 55);
      context.lineTo(250, 55);
      context.closePath();
      context.fill();
      context.beginPath();
      context.fillStyle = "black";
      context.moveTo(260, 60);
      context.lineTo(255, 55);
      context.lineTo(270, 55);
      context.closePath();
      context.fill();
      break;

    case "n":
      context.strokeStyle = "green";
      context.lineWidth = 3;
      context.beginPath();
      context.moveTo(260, 210);
      context.lineTo(300, 150);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.fillStyle = "purple";
      context.arc(290, 145, 15, 0, Math.PI * 2);
      context.closePath();
      context.arc(300, 130, 15, 0, Math.PI * 2);
      context.closePath();
      context.arc(320, 145, 15, 0, Math.PI * 2);
      context.closePath();
      context.arc(310, 160, 15, 0, Math.PI * 2);
      context.closePath();
      context.fill();
      context.beginPath();
      context.fillStyle = "white";
      context.arc(305, 145, 5, 0, Math.PI * 2);
      context.closePath();
      context.fill();
      break;

    case "a":
      context.beginPath();
      context.fillStyle = "red";
      context.arc(250, 73, 15, 0, Math.PI);
      context.closePath();
      context.fill();
      break;
  }
});
