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

Latin Letter to Morse Code Audio Translator For Espruino

Created 13 July 2014
by Kay Anar

*/

var morse_codes =
{
	"A" : ".-",
	"B" : "-...",
	"C" : "-.-.",
	"D" : "-..",
	"E" : ".",
	"F" : "..-.",
	"G" : "--.",
	"H" : "....",
	"I" : "..",
	"J" : ".---",
	"K" : "-.-",
	"L" : ".-..",
	"M" : "--",
	"N" : "-.",
	"O" : "---",
	"P" : ".--.",
	"Q" : "--.-",
	"R" : ".-.",
	"S" : "...",
	"T" : "-",
	"U" : "..-",
	"V" : "...-",
	"W" : ".--",
	"X" : "-..-",
	"Y" : "-.--",
	"Z" : "--..",
	"0" : "-----",
	"1" : ".----",
	"2" : "..---",
	"3" : "...--",
	"4" : "....-",
	"5" : ".....",
	"6" : "-....",
	"7" : "--...",
	"8" : "---..",
	"9" : "----.",
	"." : ".-.-.-",
	"," : "--..--",
	"?" : "..--.."
};

var morse_message = "";

var speaker_pin = A10;

var repeat_play = false;

var charIndex = -1;

function _silence()
{
  digitalWrite(speaker_pin, 0);
  setTimeout(_playBeep, 150);
}

function _playBeep()
{ 
  charIndex++;
  if (charIndex >= morse_message.length)
    if (repeat_play)
      charIndex = 0;
    else
      return;
  var char2play = morse_message.charAt(charIndex);
  
  if (char2play == " ")
    digitalWrite(speaker_pin, 0);
  else
    analogWrite(speaker_pin, 0.5, { freq: 800 } );

  setTimeout(_silence, char2play == "." ? 100 : 300);
}

function play(message)
{
  morse_message = "";
  for(var index = 0; index < message.length; index++)
  {
    var code = morse_codes[message.charAt(index).toUpperCase()];
    if (typeof code != "undefined")
      morse_message += code + " ";
  }
  charIndex = 0;
  print("Playing", morse_message);
  setTimeout(_playBeep, 100);
}

function stop()
{
  repeat = false;
  charIndex = morse_message.length;
  print("Stopped");
}

function repeat()
{
  repeat_play = !repeat_play;
  print ("Repeat", repeat_play);
}

function onInit()
{
  print("Available commands : ");
  print("play(\"message\");", "// Plays your message in morse code");
  print("stop();", "// Stops current playing morse code message");
  print("repeat();", "// Toggles repeat playing"); 
}

onInit();