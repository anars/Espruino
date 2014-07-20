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

Text to Morse Audio 2
by Kay Anar in July 20, 2014

This code uses binary tree to find mode codes;

                       T   <---------- DAHs   MORSE   DITs ..........>   E
                      / \                                               / \
                     /   \                                             /   \
                    /     \                                           /     \
                   /       \                                         /       \
                  /         \                                       /         \
                 /           \                                     /           \
                /             \                                   /             \
               /               \                                 /               \
              /                 \                               /                 \
             /                   \                             /                   \
            /                     \                           /                     \
           M                       N                         A                       I
          / \                     / \                       / \                     / \
         /   \                   /   \                     /   \                   /   \
        /     \                 /     \                   /     \                 /     \
       /       \               /       \                 /       \               /       \
      /         \             /         \               /         \             /         \
     O           G           K           D             W           R           U           S
    / \         / \         / \         / \           / \         / \         / \         / \
   /   \       /   \       /   \       /   \         /   \       /   \       /   \       /   \
  ×     ×     Q     Z     Y     C     X     B       J     P     ×     L     ×     F     V     H
 / \   / \   / \   / \   / \   / \   / \   / \     / \   / \   / \   / \   / \   / \   / \   / \
0   9     8 ×   × ×   7 ×   × ×   × ×   × ×   6   1   × ×   × ×   × ×   × 2   × ×   × 3   × 4   5

*/

var morse_message = "";

var speaker_pin = A10;

var repeat_play = false;

var charIndex = -1;

function text2Morse(text)
{
  var morse = "";

  text = text.toLowerCase();

  for(var index in text)
  {
    charOffset = " etinamsdrgukwohblzfcp×vx×q×yj×56×7×××8×××××××94×××××××3×××2×10".indexOf(text[index]);
    while(charOffset > 0)
    {
      morse += "-."[charOffset--&1];
      charOffset = charOffset / 2 | 0;
    }
    morse += " ";
  }
  return(morse);
}

function beep(time)
{
  analogWrite(speaker_pin, 0.5, { freq : 800 } );
  setTimeout(function() { digitalWrite(speaker_pin, 0); }, time);
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

  var time = morse_message.charAt(charIndex) == "." ? 100 : 300;

  if (char2play != " ")
    beep(time);

  setTimeout(_playBeep, time + 150);
}

function play(message)
{
  morse_message = text2Morse(message);
  charIndex = -1;
  print("Playing", morse_message);
  setTimeout(_playBeep, 100);
}

function stop()
{
  repeat_play = false;
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