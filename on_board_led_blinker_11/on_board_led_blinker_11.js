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

On Board LED Blinker 11
by Kay Anar in June 24, 2014

*/

setInterval(function() { digitalWrite(LED1, !digitalRead(LED1)); }, 100);

setInterval(function() { digitalWrite(LED2, !digitalRead(LED2)); }, 200);

setInterval(function() { digitalWrite(LED3, !digitalRead(LED3)); }, 300);