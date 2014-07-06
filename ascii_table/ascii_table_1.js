/**
* ASCII Table for Espruino
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

This script prints ASCII Table.

Created 6 July 2014
by Kay Anar

*/

function padZero(value, digit)
{
  var zeros = digit - value.length;
  for(var index = 0; index < zeros; index++)
    value = "0" + value;
  return(value);
}

function asciiTable()
{
  for(var index = 0; index < 256; index++)
  {
    if (index == 0)
      print("ASCII control characters (character code 0-31)");
    else if (index == 32)
      print("ASCII printable characters (character code 32-127)");
    else if (index == 128)
      print("The extended ASCII codes (character code 128-255)");
      print("Dec :", padZero(""+ index, 3), " Oct :", padZero(index.toString(8), 3), " Hex :", padZero(index.toString(16).toUpperCase(), 2), " Asc :", String.fromCharCode(index));
  }
}

function onInit()
{
  asciiTable();
}

onInit();