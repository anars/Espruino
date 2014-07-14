/**
* Memory Hexdump for Espruino
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

This script dumps a memory range as hexadecimal and ascii

Sample output of the script :
 _____                 _
|   __|___ ___ ___ _ _|_|___ ___
|   __|_ -| . |  _| | | |   | . |
|_____|___|  _|_| |___|_|_|_|___|
          |_| http://espruino.com
 1v64 Copyright 2014 G.Williams
>echo(0);
Address  Hexadecimal Values                           Ascii Values
-------- -------------------------------------------- ---------------
080351DF BC 9E 46 70 47 08 07 00 00 14 00 00 00 19 93 ¼.FpG..........
080351EE 00 08 01 93 00 08 19 93 00 08 19 93 00 08 19 ...............
080351FD 93 00 08 19 93 00 08 19 93 00 08 19 93 00 08 ...............
0803520C F5 92 00 08 FF 00 40 9C AC FA 02 08 04 00 00 õ...ÿ.@.¬ú.....
0803521B 00 B0 FA 02 08 26 00 00 00 98 F7 02 08 32 00 .°ú..&....÷..2.
0803522A 00 00 50 00 00 20 1A 00 00 00 1A 03 53 00 54 ..P.. ......S.T
08035239 00 4D 00 33 00 32 00 00 00 00 00 00 00 00 00 .M.3.2.........
08035248 00 00 00 00 00 00 00 00 00 A2 4A 04 BE BA FE .........¢J.¾ºþ
08035257 CA 00 C2 01 00 00 00 08 00 02 04 06 08 00 00 Ê.Â............
08035266 00 00 01 02 03 04 01 02 03 04 06 07 08 09 EF ..............ï
08035275 BE AD DE B8 FC 02 08 12 00 00 00 48 00 03 08 ¾.Þ¸ü......H...
08035284 43 00 00 00 01 00 00 00 01 FF 00 00 FF FF FF C........ÿ..ÿÿÿ
08035293 FF FF FF 00 00 2D 8F 00 08 E5 AF 00 08 E1 92 ÿÿÿ..-...å¯..á.
080352A2 00 08 DD 92 00 08 7D 92 00 08 29 92 00 08 19 ..Ý...}...)....
080352B1 92 00 08 39 93 00 08 45 93 00 08 51 93 00 08 ...9...E...Q...
080352C0 00 00 00 00 40 00 00 00 FF FF FF FF FF FF FF ....@...ÿÿÿÿÿÿÿ
080352CF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ
080352DE FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ

Created 6 July 2014
by Kay Anar

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