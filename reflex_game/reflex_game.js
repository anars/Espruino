/**
* Reflex Game For Espruino
* Copyright (c) 2014 Anar Software LLC. < http://anars.com >
*
* This program is free software: you can redistribute it and/or modify it under
* the terms of the GNU General Public License as published by the Free Software
* Foundation, either version 3 of the License, or (at your option) any later
* version.
*
* This program is distributed in the hope that it will be useful, but WITHOUT
* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
* FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with
* this program. If not, see < http://www.gnu.org/licenses/ >
*
*/

/*

 Reflex Game For Espruino
 
 It is a simple reflex game using default Espruino 1.3 setup,
 using 3 LEDs and push button on the board.
 
 The aim of the game to improve your reaction time and reflex,
 to score, press the button when the blue light (LED3) lit.

 Created 24 June 2014
 by Kay Anar

*/

// Define and initial the variables
// Current level
var level = 0;
// Timer handler
var timer = 0;
// Current light
var light = 0;
// Button watch handler
var button = 0;

// Call the function 'button_down' when the button pressed
button = setWatch(button_down, BTN, true);

// Call the function random_light repeatedly every 1000 in milliseconds.
timer = setInterval(random_light, 1000);

// Print game introduction strings to the console
print('Welcome to Reflex Game');
print('The aim of the game to improve your reaction time and reflex,');
print('to score, press the button when the blue light lit.');
print('Good luck ;)');

function random_light()
{
	// Pick a random value between 0 to 100
	var rnd = Math.random() * 100;
	// if number between 0 and 44, light up LED1
	if (rnd >= 0 && rnd < 45)
		light_led(1);
	// if number between 45 and 89, light up LED2
	else if (rnd >= 45 && rnd < 90)
		light_led(2);
	// if number between 90 and 100, light up LED3
	else
		light_led(3);
}

function light_led(number)
{
	// Set current LED number to light variable
	light = number;
	// If number is 1 set the LED1 to HIGH else set it to LOW
	LED1.write(number == 1 ? HIGH : LOW);
	// If number is 2 set the LED2 to HIGH else set it to LOW
	LED2.write(number == 2 ? HIGH : LOW);
	// If number is 3 set the LED3 to HIGH else set it to LOW
	LED3.write(number == 3 ? HIGH : LOW);
}

function button_down()
{
	// Clear timer interval
	clearInterval(timer);
	// If LED3 is lit, user wins
	if (light == 3)
		{
		// Call the function random_light repreatedly starting 1000 in milliseconds,
		// but 50 milliseconds less every level
		timer = setInterval(random_light, 1000 - (++level * 50));
		// Print current game level
		print('Congratulations, you caught the blue light. your new score is ' + level);
		}
	// User loses, if LED3 is not lit
	else
		{
		// Clear the watch, so board doesn't listen to button anymore
		clearWatch(button);
		// Call the function anonymous function repeatedly every 1000 in milliseconds.
		// to blink the red (LED1)
        timer = setInterval(function() { light_led(light == 0 ? 1 : 0); }, 1000);
        // Print end of game message
		print('Sorry you lost, please reset the board to play again.');
		}
}