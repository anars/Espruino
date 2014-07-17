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

Extended Math object For Espruino

This script extends Math object, adds new functions

Created 3 July 2014
by Kay Anar

*/

// This function re-maps a number from one range to another.
// That is, a value of fromLow would get mapped to toLow,
// a value of fromHigh to toHigh, values in-between to values
// in-between, etc.
//
// Does not constrain values to within the range, because
// out-of-range values are sometimes intended and useful.
// The Math.constrain function may be used either before or
// after this function, if limits to the ranges are desired.
//
// Note that the "lower bounds" of either range may be larger
// or smaller than the "upper bounds" so the Math.map function
// may be used to reverse a range of numbers, for example
//
// var y = Math.map(x, 1, 50, 50, 1);
//
// The function also handles negative numbers well, so that this example
//
// var y = Math.map(x, 1, 50, 50, -100);
//
// is also valid and works well.
//
// Ported from Arduino map function at http://arduino.cc/en/reference/map
//
Math.map = function(value, fromLow, fromHigh, toLow, toHigh)
{
	return ((value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow);
};

// This function converts a floating-point (such as 3.14) number
// to an integer (such as 3)
//
// The bitwise operators perform low-level manipulation of the bits
// in the binary representation of numbers. The bitwise operators
// expect integer operands and behave as if those values were represented
// as 32-bit integers rather than 64-bit floating-point values.
// These operators convert their operands to numbers, if necessary,
// and then coerce the numeric values to 32-bit integers by dropping
// any fractional part and any bits beyond the 32nd.
//
// There are other ways to convert a floating-point (such as 3.14) number
// to an integer (such as 3); in standard Javascript, you may call Math.floor
// function and in Espruino Javascript, you may call Double.doubleToIntBits
//
Math.floatToInt = function(float)
{
  return(float | 0);
};

// This function constrains a number to be within a range.
//
// Ported from Arduino map function at http://arduino.cc/en/Reference/Constrain
//
Math.constrain = function(value, lowerVal, upperVal)
{
	if (value > upperVal)
		value = upperVal;
	else if (value < lowerVal)
		value = lowerVal;
	return (value);
};

print(" ");
print("Math.map(512, 0, 1023, 0, 100);");
print(Math.map(512, 0, 1023, 0, 100));
// prints 50.0488758553274664109267177991569042205810546875 

print(" ");
print("Math.map(-512, 0, 1023, 0, 100);");
print(Math.map(-512, 0, 1023, 0, 100));
// prints -50.0488758553274664109267177991569042205810546875

print(" ");
print("Math.constrain(Math.map(-512, 0, 1023, 0, 100), 0, 1023);");
print(Math.constrain(Math.map(-512, 0, 1023, 0, 100), 0, 1023));
// prints 0

print(" ");
print("Math.floatToInt(Math.map(512, 0, 1023, 0, 100));");
print(Math.floatToInt(Math.map(512, 0, 1023, 0, 100)));
// prints 50