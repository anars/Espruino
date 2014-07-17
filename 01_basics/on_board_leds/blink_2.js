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

 Blink
 
 Turns on LED1 for one second, then off for one second, repeatedly.
 
 Created 16 July 2014
 by Kay Anar

*/

// Executes the anonymous function every second, toggles LED1 value
setInterval(function() { digitalWrite([LED1, LED2, LED3], a = !a ? 7 : 0); print(a); }, 1000);