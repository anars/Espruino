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

ASCII Characters Table
by Kay Anar in July 6, 2014

*/

function asciiTable()
{
  for(var index = 0; index < 256 ; index += 8)
  {
    if (index == 0)
      print("ASCII control characters (character code 0-31)");
    else if (index == 32)
      print("ASCII printable characters (character code 32-127)");
    else if (index == 128)
      print("The extended ASCII codes (character code 128-255)");
    var output = "";
    for(var offset = 0; offset < 8; offset++)
    {
      if (offset != 0)
        output += "  ";
      output += ((index + offset) < 10 ? "00" : ((index + offset) < 100 ? "0" : "")) + (index + offset);
      output += " (";
      output += ((index + offset) < 16 ? "0" : "") + (index + offset).toString(16).toUpperCase();
      output += ")";
      output += " ";
      if ((index + offset > 31 && index + offset < 128) || (index + offset > 160 && index + offset < 256 && index + offset != 173))
      output += String.fromCharCode(index + offset);
      else
        output += " ";
    }
    print(output);
    output = null;
  }
}

function onInit()
{
  asciiTable();
}

onInit();