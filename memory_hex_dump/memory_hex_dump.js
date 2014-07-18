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

Memory Hex Dump 
by Kay Anar in July 6, 2014

This script dumps a memory range as hexadecimal and ascii

*/

function hexformat(value, digit)
{
  value = value.toString(16).toUpperCase();
  var zeros = digit - value.length;
  for(var index = 0; index < zeros; index++)
    value = "0" + value;
  return(value);
}

function hexdump(start, end)
{
  start -= start % 0xF;
  print("Address  Hexadecimal Values                           Ascii Values");
  print("-------- -------------------------------------------- ---------------");
  for(var index = start; index < end ; index += 0xF)
  {
    var hexout = "";
    var ascout = "";
    for(var offset = 0x0; offset < 0xF; offset++)
    {
      var value = peek8(index + offset);
      hexout += " " + hexformat(value, 2);
      if ((value > 31 && value < 128) || (value > 160 && value < 256 && value != 173))
      	ascout += String.fromCharCode(value);
      else
      	ascout += ".";
      value = null;
    }
    print(hexformat(index, 8) + hexout + " " + ascout);
    hexout = null;
    ascout = null;
  }
}

function onInit()
{
  hexdump(process.memory().flash_binary_end, process.memory().flash_binary_end + 255);
}

onInit();