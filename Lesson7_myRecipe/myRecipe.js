/*
Program Name: Recipe Display Application
Author: Jordan Tessler
Date: 4/6/16
Filename: script.js
*/

/* global $ */

//displays the next element after the current target
function display(event) {
 $(event.currentTarget).next().fadeIn("slow");
}//end of display
//attach event listener to h3 elements to invoke display function when clicked
// $("h3").click(display);

$("h1").after("<img src='starscookie.png' alt='CookiesStars'>")

//displays and animates the next element after the current target
function display2(event) {
 $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
 $(this).css("background-color", "red");
 }, function(){
 $(this).css("background-color", "blue");
});
