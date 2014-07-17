/**
* Espruino by Examples < http://git.io/ebe >
*
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
*/
/*

 Decision Maker For Espruino
 
 A random coin flip or coin toss or yes/no to make those hard 50/50 decisions.

 You may assume LED1 red as "no" or "tails" and LED2 green as "yes" or "heads"
 
 Created 24 June 2014
 by Kay Anar

*/

// Define and initialize the variables
// Current light time out value
var timeOutValue = 0;
// Current light
var light = 0;

function button_down()
{
	// Set timeOutValue to 50 milliseconds
	timeOutValue = 50;
	// Call the function flip_flop ONCE after the timeout in milliseconds.
	setTimeout(flip_flop, timeOutValue);
}

function flip_flop()
{
	// Clear the Timeout that was created with setTimeout
	clearTimeout(timeOutHandler);
	if (timeOutValue < 1000)
		{
		timeOutValue += Math.random() * 50;
		light = !light;
		// If number is 0 set the LED1 to HIGH else set it to LOW
		LED1.write(light == 0 ? HIGH : LOW);
		// If number is 1 set the LED2 to HIGH else set it to LOW
		LED2.write(light == 1 ? HIGH : LOW);
		setTimeout(flip_flop, timeOutValue);
		}
}

// Call the function 'button_down' when the button pressed
setWatch(button_down, BTN, true);