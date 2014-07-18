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

Extended Array Object
by Kay Anar in July 11, 2014

This script extends Array object, adds new functions

*/

// Returns true if this list contains the specified value.
Array.prototype.contains = function (value)
{
	for (var index = 0; index < this.length; index++)
		if (this[index] == value)
			return(true);
	return(false);
};

// Returns the index within this string of the first occurrence of the specified value.
Array.prototype.indexOf = function (value)
{
	for (var index = 0; index < this.length; index++)
		if (this[index] == value)
			return(index);
	return(-1);
};

print(" ");
print([1, 4, 5].contains(3));
// prints false

print(" ");
print([1, 4, 5].contains(5));
// prints true

print(" ");
print([1, 4, 5].indexOf(3));
// prints -1

print(" ");
print([1, 4, 5].indexOf(5));
// prints 2