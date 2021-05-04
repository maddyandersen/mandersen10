// Team Dingus Skwaa (Maddy Andersen, Helena Williams)
// SoftDev
// K25: I See a Red Door -- canvas based JS drawing
// 2021-05-03

/*
e.preventDefault(); - prevents the default action from occurings
ctx.beginPath(); - starts a new path, is the signal to start a new drawing
e.offsetX - returns x-coordinate of mouse, relative to the canvas
e.offsetY - returns y-coordinate of mouse, relative to the canvas
*/

//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init global state var
var mode = "rect";

// toggle button
var toggle = document.getElementById("toggle");

// clear button
var clear = document.getElementById("clear");

//var toggleMode = function(e) {
var toggleMode = (e) => {
  console.log("toggling...");
  if (mode == "rect"){
    mode = "dot";
    toggle.textContent = "change to rect";
    console.log("changed to dot");
  }
  else{
    mode = "rect";
    toggle.textContent = "change to dot";
    console.log("changed to rect");
  }
}

//var drawRect = function(e) {
var drawRect = (e) => {
  console.log("drawing rectangle...");

  // to capture coords of mouseclick
  var x = event.offsetX;
  var y = event.offsetY;
  console.log("mouse xy:");
  console.log("x: "+ x);
  console.log("y: "+ y);

  // and draw a rectangle there
  ctx.fillRect(x,y,20,25);

}


//var drawCircle = function(e) {
// ctx.arc(x, y, radius, startAngle, endAngle);
var drawCircle = (e) => {
  console.log("drawing circle...");

  // to capture coords of mouseclick
  var x = event.offsetX;
  var y = event.offsetY;
  console.log("mouse xy:");
  console.log("x: "+ x);
  console.log("y: "+ y);

  // and draw a circle there
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}


//var draw = function(e) {
var draw = (e) => {
  console.log("draw")
  ctx.beginPath();
  if (mode == "rect"){
    drawRect();
  }
  else{
    drawCircle();
  }
}

//var wipeCanvas = function() {
var wipeCanvas = () => {
  console.log("wiping canvas...")
  ctx.clearRect(0,0,600,600);
  console.log("ET VIOLA.  eh?")
}

// ...to add an event listener to the canvas, and call the appropriate fxn
c.addEventListener("click", function(){
  draw(event);
  event.preventDefault();
});

// ...to add an event listener to the toggle button, and call the appropriate fxn
toggle.addEventListener("click",function(){
  toggleMode();
});

// ...to add an event listener to the clear button, and call the appropriate fxn
clear.addEventListener("click",function(){
  wipeCanvas();
});
