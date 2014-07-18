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

 Espruino Memory Leak Example
 
 This script demonstrates how to leak memory on Espruino board.
 
 In short : If you have a large object that is used by some closures,
 but not by any closures that you need to keep using, just make sure
 that the local variable no longer points to it once you're done with it.
 
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