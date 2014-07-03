/**
* Espruino Memory Leak Example
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

 Espruino Memory Leak Example
 
 It example script demonstrate how to leak memory on Espruino board
 
 Created 3 July 2014
 by Kay Anar

*/

var myObject = null;

var leakMemory = function ()
  {
  print(">", process.memory().free);

  var myOldObject = myObject;

  myObject =
    {
    myString : new Array(1000).join('LEAK'),
    myFunction : function ()
      {
      print(myString);
      }
    };

  print("<", process.memory().free);
};

setInterval(leakMemory, 1000);

/*
 _____                 _
|   __|___ ___ ___ _ _|_|___ ___
|   __|_ -| . |  _| | | |   | . |
|_____|___|  _|_| |___|_|_|_|___|
          |_| http://espruino.com
 1v64 Copyright 2014 G.Williams
>echo(0);
=undefined
> 1746
< 1474
> 1467
< 1202
> 1195
< 930
> 923
< 658
> 651
< 386
> 379
< 114
> 107
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Out of Memory!
ERROR: Got ID:myFunction expected '}' at line 9 col 4
    myFunction : function ()
    ^
in function called from system
ERROR: Error processing interval - removing it.
Execution Interrupted during event processing.
> 
*/