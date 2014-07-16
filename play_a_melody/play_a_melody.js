/**
* Espruino by Examples
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

Play a Melody For Espruino

This script shows how to generate notes using analogWrite function.
It plays a little melody you may have heard before. 

It is based on Tom Igoe's Arduino tone example
at http://arduino.cc/en/Tutorial/tone

Created 24 June 2014
by Kay Anar

*/

var note_names = [ "B0", "C1", "CS1", "D1", "DS1", "E1", "F1", "FS1", "G1", "GS1", "A1", "AS1", "B1", "C2", "CS2", "D2", "DS2", "E2", "F2", "FS2", "G2", "GS2", "A2", "AS2", "B2", "C3", "CS3", "D3", "DS3", "E3", "F3", "FS3", "G3", "GS3", "A3", "AS3", "B3", "C4", "CS4", "D4", "DS4", "E4", "F4", "FS4", "G4", "GS4", "A4", "AS4", "B4", "C5", "CS5", "D5", "DS5", "E5", "F5", "FS5", "G5", "GS5", "A5", "AS5", "B5", "C6", "CS6", "D6", "DS6", "E6", "F6", "FS6", "G6", "GS6", "A6", "AS6", "B6", "C7", "CS7", "D7", "DS7", "E7", "F7", "FS7", "G7", "GS7", "A7", "AS7", "B7", "C8", "CS8", "D8", "DS8" ];

var note_freqs = [ 31, 33, 35, 37, 39, 41, 44, 46, 49, 52, 55, 58, 62, 65, 69, 73, 78, 82, 87, 93, 98, 104, 110, 117, 123, 131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494, 523, 554, 587, 622, 659, 698, 740, 784, 831, 880, 932, 988, 1047, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976, 2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951, 4186, 4435, 4699, 4978 ];

var melody_notes = [ "C4", "G3", "G3", "A3", "G3", "", "B3", "C4" ];

var melody_duration = [ 4, 8, 8, 4, 4, 4, 4, 4 ];

var speaker_pin = A10;

var repeat_melody = true;

var melodyIndex = 0;

function playNote()
{ 
  var index = note_names.indexOf(melody_notes[++melodyIndex]);
  
  if (index == -1)
    digitalWrite(speaker_pin, 0);
  else
    analogWrite(speaker_pin, 0.5, { freq: note_freqs[index] } );
    
  if (melodyIndex < melody_notes.length)
  {
      setTimeout(playNote, 1000 / melody_duration[melodyIndex]);
  }
  else if (repeat_melody)
  {
      melodyIndex = 0;
      setTimeout(playNote, 2000);
  }
}

setTimeout(playNote, 100);