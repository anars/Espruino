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

Morse Pulse to Letter
by Kay Anar in July 11, 2014

This script shows how to measure the length of a button pulse.

*/

var dash_length = 0.2;
var letter_timeout = 750;

var morse =
{
	".-" : "A",
	"-..." : "B",
	"-.-." : "C",
	"-.." : "D",
	"." : "E",
	"..-. " : "F",
	"--." : "G",
	"...." : "H",
	".." : "I",
	".---" : "J",
	"-.-" : "K",
	".-.." : "L",
	"--" : "M",
	"-." : "N",
	"---" : "O",
	".--." : "P",
	"--.-" : "Q",
	".-." : "R",
	"..." : "S",
	"-" : "T",
	"..-" : "U",
	"...-" : "V",
	".--" : "W",
	"-..-" : "X",
	"-.--" : "Y",
	"--.." : "Z",
	"-----" : "0",
	".----" : "1",
	"..---" : "2",
	"...--" : "3",
	"....-" : "4",
	"....." : "5",
	"-...." : "6",
	"--..." : "7",
	"---.." : "8",
	"----." : "9",
	".-.-.-" : ".",
	"--..--" : ",",
	"..--.." : "?"
};

var input = "";
var timeout = -1;

function morsePrint()
{
  print(morse[input]);
  input = "";
  timeout = -1;
}

function morseInput(event)
{
  input += event.time - event.lastTime < dash_length ? "." : "-";

  if(timeout != -1)
    clearTimeout(timeout);

  timeout = setTimeout(morsePrint, letter_timeout);
}

setWatch(morseInput, BTN, { repeat:true, edge:"falling" });