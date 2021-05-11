// Team LOL (Maddy Andersen, Liam Kronman)
// SoftDev
// Guarding Against Burnout -- canvas based JS animation
// 2021-05-11



// access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
var dvdButton = document.getElementById("buttonDVD"); // GET DVD BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON

// prepare to interact with canvas in 2D
var ctx = c.getContext("2d"); // YOUR CODE HERE

// set fill color to team color
ctx.fillStyle = "#a0c293";

var requestID;  // init global var for use with animation frames

// var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  // e.preventDefault();
  ctx.clearRect(0,0,500,500);
};

var radius = 0;
var growing = true;

var drawDot = () => {
    // Wipe the canvas
    console.log("drawDot invoked...");
    window.cancelAnimationFrame(requestID);

    clear();
    // Repaint the circle
    ctx.beginPath();
    ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.stroke();
    // Update requestID to propagate the animation.
    if(growing){
      radius++;
      if(radius == 250){
        growing = false;
      }
    }
    else{
      radius--;
      if(radius == 0){
        growing = true;
      }
    }
    requestID = window.requestAnimationFrame(drawDot);
};

// inititalizing DVD logo
var logo = new Image();
logo.src = "logo_dvd.jpg";

// starting location for DVD image
var x = c.width / 2 - 50;
var y = c.height / 2 - 25;

// starting direction of movement
var dx = 1;
var dy = -1;

// note: because the image has white space around it, the DVD logo does not hit the border of the canvas
var moveDVD = () => {
  console.log("moveDVD invoked...");
  window.cancelAnimationFrame(requestID);

  clear();
  ctx.drawImage(logo, x, y, 100, 50);

  // right edge or left edge
  if(x >= c.width-100 || x <= 0){
    dx = -dx;
  }

  // bottom edge or top edge
  if (y >= c.height-50 || y <= 0){
    dy = -dy;
  }

  x += dx;
  y += dy;

  requestID = window.requestAnimationFrame(moveDVD);
};

var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener( "click", drawDot );
dvdButton.addEventListener( "click", moveDVD );
stopButton.addEventListener( "click",  stopIt );
