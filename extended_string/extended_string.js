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

Extended Array object For Espruino

This script extends Array object, adds new functions

Created 11 July 2014
by Kay Anar

*/

String.prototype.template = function (objVar)
{
	var strVar = this;
	if(typeof objVar === "object")
	{
		var length = strVar.length;
		var start = -1;
		var key = "";
		for(var index = 0; index < length; index++)
		{
			if (strVar.charAt(index) == '{' && start == -1)
				start = index;
			else if (strVar.charAt(index) == '}' && start != -1)
			{
				strVar = strVar.substring(0, start) + objVar[key] + strVar.substring(index + 1);
				start = -1;
				key = "";
				length = strVar.length;
			}
			else if (start != -1)
			{
				key += strVar.charAt(index);
			}
		}
	}
	return(strVar);
};

print("Free memory {free} bytes of total {total} bytes.".template(process.memory()));
// prints Free memory 1716 bytes of total 1800 bytes.