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

Digital Multiple Read
by Kay Anar in July 14, 2014 

*/

var PINS = [C5, C4, C6];

function onInit()
{
	// read the pins' digital values
	var pinValues = digitalRead(PINS);

	// print out the values you read as Integer
	print("Integer =", pinValues);
	// print out the values you read as Binary
	print("Binary  =", pinValues.toString(2));
}

// call the onInit() function
onInit();