// Team Dingus Skwaa (Maddy Andersen, Helena Williams)
// SoftDev
// K26: they lock us in the tower whenever we get caught - canvas based animation
// 2021-05-05

// model for HTML5 canvas-based js animation

// SKEELTON


//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d"); // YOUR CODE HERE

//set fill color to team color
ctx.fillStyle = "#cc8899";

var requestID;  //init global var for use with animation frames



//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0,0,500,500);
};

var radius = 0;
var growing = true;

var drawDot = () => {
    //Wipe the canvas
    console.log("drawDot invoked...");

    clear();
    //Repaint the circle
    ctx.beginPath();
    ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    ctx.fill();
    window.cancelAnimationFrame(requestID);

    ctx.stroke();
    //Update requestID to propagate the animation.
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

var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
