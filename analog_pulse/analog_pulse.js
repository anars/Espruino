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

Analog Pulse
by Kay Anar in July 20, 2014

Pulse the pin with the analog value for the given time in milliseconds.

Parameters :
pin - The pin to use
value - A value between 0.0 and 1.0
time - A time in milliseconds
Options Parameters :
freq - pulse frequency in Hz (optional)
func - function to be executed when end of the pulse (optional)

*/

function analogPulse(pin, value, time, options)
{
  analogWrite(pin, value, options );
  setTimeout(function() { digitalWrite(pin, 0); try { options["func"](); } catch(e){ } }, time);
}

analogPulse(A10, 0.5, 1000, { freq: 500, func: function() { print("End of beep!"); } });