//Creating a grid
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var dotWidth = document.getElementById("module").offsetWidth;
var rows = Math.round(screenWidth / dotWidth);
var columns = Math.round(screenHeight / dotWidth);
var modules = rows * columns;
var rowcol = rows + " keer " + columns + " is " + modules;

function fillModules(){
    console.log(dotWidth);
    document.getElementById("gridContainer").innerHTML= "<div class='module'></div>".repeat(modules);
}
fillModules();

console.log("left: " + leftOffset + " top: " + topOffset)