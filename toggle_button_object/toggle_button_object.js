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

Toggle Button Object
by Kay Anar in July 19, 2014

*/
var ToggleButton = function(_pin, _action)
{
  var _value = false;

  this.getValue = function()
  {
    return(_value);
  };

  this.getPin = function()
  {
    return(_pin);
  };

  this.setPin = function(newPin)
  {
    if(typeof newPin == "number")
    {
      _pin = newPin;
      clearWatch(_id);
      _id = setWatch(watchAction, _pin, { repeat:true, edge:"rising", debounce:50 });
    }
  };

  this.setAction = function(newAction)
  {
    if(typeof newAction == "function")
      _action = newAction;
  };

  var watchAction = function()
  {
    _value = !_value;
    if(typeof _action == "function")
       _action(_value);
  };

  var _id = setWatch(watchAction, _pin, { repeat:true, edge:"rising", debounce:50 });

};

var tObj = new ToggleButton(BTN, function(value) { digitalWrite(LED3, value); });
print(wObj);