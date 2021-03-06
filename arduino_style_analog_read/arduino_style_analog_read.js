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

Arduino Style Analog Read
by Kay Anar in July 14, 2014

*/

var PIN = C4;

function onInit()
{
	// read the pin's analog value, converts it to Arduino value
	var pinValue = analogRead(PIN) * 1023 | 0;

	// print out the value you read
	print("Value", "=", pinValue, "Units", "(", E.getAnalogVRef() / 1024, "Volts Per Unit", ")");
}

// call the onInit() function
onInit();