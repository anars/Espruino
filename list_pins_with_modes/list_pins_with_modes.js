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

List Pins with Modes
by Kay Anar on July 15, 2014

*/

var pinStart = [ A0, B0, C0, D0 ];
var pinNames = [ "A", "B", "C", "D"];
var pinModes = 
{
  "input": "in",
  "input_pullup": "iu",
  "input_pulldown": "id",
  "output": "op",
  "opendrain": "od",
  "af_output": "ao",
  "af_opendrain": "ad",
  "undefined": "ud"
};

print("Pin Modes :");
print("    00   01   02   03   04   05   06   07   08   09   10   11   12   13   14   15");

for (var groupIndex = 0; groupIndex < pinStart.length; groupIndex++)
{
	var values = pinNames[groupIndex] + " | ";
	for (var pinIndex = 0; pinIndex < 16; pinIndex++)
		try
		{
			values += pinModes[getPinMode(pinStart[groupIndex] + pinIndex)] + " | ";
		}
		catch(exception)
		{
			values += "na" + " | ";
		}
	print("  +----+----+----+----+----+----+----+----+----+----+----+----+----+----+----+----+");
	print(values);
}
print("  +----+----+----+----+----+----+----+----+----+----+----+----+----+----+----+----+");
print("Legend :");
print("  in : Input                    iu : Input Pull Up            id : Input Pull Down");
print("  op : Output                   od : Open Drain               ao : AF Output");
print("  ad : AF Open Drain            ud : Undefined                na : Pin Not Exits");