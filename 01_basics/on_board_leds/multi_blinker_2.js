/**
* Espruino by Examples
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

 Multi Blinker For Espruino

 This script demonstrates how to run multiple intervals with different timing.
 And execute anonymous function whick swap LED value

 It is based on Tom Igoe's multiBlink.js example
 at https://github.com/tigoe/espruino-tests/blob/master/multiBlink.js

 Created 12 July 2014
 by Kay Anar

*/

// Call the anonymous function (which defines, swaps a variable and sets it's value to LED1)
// repeatedly every 100 milliseconds
setInterval(function() { digitalWrite(LED1, a=!a); }, 100);

// Call the anonymous function  (which defines, swaps a variable and sets it's value to LED2)
// repeatedly every 200 milliseconds
setInterval(function() { digitalWrite(LED2, b=!b); }, 200);

// Call the anonymous function  (which defines, swaps a variable and sets it's value to LED3)
// repeatedly every 300 milliseconds
setInterval(function() { digitalWrite(LED3, c=!c); }, 300); 