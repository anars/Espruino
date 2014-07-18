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

 Multi Blinker For Espruino

 This script demonstrates how to run multiple intervals with different timing.
 And execute anonymous function whick swap LED value

 It is based on Tom Igoe's multiBlink.js example
 at https://github.com/tigoe/espruino-tests/blob/master/multiBlink.js

 However, it uses less memory but more processor cycle

 Created 24 June 2014
 by Kay Anar

*/

// Call the anonymous function (which reads and swaps LED1 value)
// repeatedly every 100 milliseconds
setInterval(function() { digitalWrite(LED1, !digitalRead(LED1)); }, 100);

// Call the anonymous function (which reads and swaps LED2 value)
// repeatedly every 200 milliseconds
setInterval(function() { digitalWrite(LED2, !digitalRead(LED2)); }, 200);

// Call the anonymous function (which reads and swaps LED3 value)
// repeatedly every 300 milliseconds
setInterval(function() { digitalWrite(LED3, !digitalRead(LED3)); }, 300); 