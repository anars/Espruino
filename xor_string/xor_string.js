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

XOR String
by Kay Anar in July 27, 2014

This function does Bitwise XOR on strings

*/

function xorString(text, seed)
{
  var result = "";
  for(var index = 0; index < text.length; index++)
    result += String.fromCharCode(text.charCodeAt(index) ^ seed.charCodeAt(index % seed.length));
  return(result);
}

var text = "password";
var seed = "" + (new Date()).getMilliseconds();
var xored = xorString(text, seed);

for(var index = 0; index < xored.length; index++)
  print(text.charAt(index),
        "(" + text.charCodeAt(index).toString(16) + ")" ,
        "XOR", seed.charAt(index % seed.length),
        "(" + seed.charCodeAt(index % seed.length).toString(16) + ")" ,
        "=",
        "(" + xored.charCodeAt(index).toString(16) + ")",
        xored.charAt(index));