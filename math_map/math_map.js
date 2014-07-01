/**
* Math.map For Espruino
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

Math.map For Espruino

This script extends Math object, adds a function called "map"
which re-maps a number from one range to another.

Inspired by http://arduino.cc/en/reference/map

Created 1 July 2014
by Kay Anar

*/

// DISCLAIMER : The code is tested on an Espruino board yet!

// Browser Javascript engines give error if you use "Math.prototype"
// Therefore, I am not quite sure about Espruino engine.
// It should work, If Espruino engine follows Mozilla standards.
Math.map = function(value, fromLow, fromHigh, toLow, toHigh)
{
	var mappedValue = (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow;
	if (mappedValue > toHigh)
		mappedValue = toHigh;
	else if (mappedValue < toLow)
		mappedValue = toLow;
	return (mappedValue);
}

print(Math.map(512, 0, 1023, 0, 1));

