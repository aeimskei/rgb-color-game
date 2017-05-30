// add code to give the squares different color
// everytime the page loads, it'll pick 6 random colors
// and assigns each color to one of the divs

// make an array of colors (put on separate lines for more visibility)
// an array of 6 colors as strings
var colors = [
    "rgb(255, 0, 0)", // all red
    "rgb(255, 255, 0)", // all red and green = yellow
    "rgb(0, 255, 0)", // all green
    "rgb(0, 255, 255)", // all green and blue = cyan
    "rgb(0, 0, 255)", // all blue
    "rgb(255, 0, 255)" // all red and blue = purple
    ];
    
// select all 6 squares, loop through them and assign on of these colors to each one's backgrounds
// use document.querySelectorAll bc we have a lot of choices, to make sure to get all 6
// select based off of the "class" .square not the container
var squares = document.querySelectorAll(".square");

// next, generate 3 different numbers from 0-255 and then combine them
// so just 3 differen channels, all randomized into one big string with RGB
// start off with hard-coding them in first, say goal color is cyan, not randomized
// cyan is the 4th color, so index of 3
var pickedColor = colors[3];

// then update page so that it says RGB and in () the colors
// to do that, have to change html, put span around "RGB" with id="colorDisplay"
var colorDisplay = document.getElementById("colorDisplay");

// update "colorDisplay" so it says the color picked
colorDisplay.textContent = pickedColor;

// [i] is going to loop through all squares (0, 1, 2, 3, 4, 5)
// each var "squares" will be colored based on the array of var "colors"
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; // use style.backgroundColor (now it'll work with all browsers)
}