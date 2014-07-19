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

Analog Read Watch
by Kay Anar in July 14, 2014

*/
var AnalogReadWatch = function(watchPin, eventFunction, timeout, difference, repeat)
{
  if (typeof watchPin != "number")
  {
    print("ERROR: Unknown watchPin");
    return;
  }

  if (typeof difference != "number")
    difference = 0.01;

  this.getDifference = function()
  {
    return(difference);
  };

  this.setDifference = function(newDifference)
  {
    if (typeof newDifference == "number")
      difference = newDifference;
  };

  if (typeof repeat != "boolean")
    repeat = true;

  this.getRepeat = function()
  {
    return(repeat);
  };

  this.setRepeat = function(newRepeat)
  {
    if (typeof newRepeat == "boolean")
      repeat = newRepeat;
  };

  var _lastValue = analogRead(watchPin);

  this.getLastValue = function()
  {
    return(_lastValue);
  };

  this.getLastValueAs7Bit = function()
  {
    return(_lastValue * 1024 | 0);
  };

  this.getLastValueAsVolt = function()
  {
    return(_lastValue * E.getAnalogVRef());
  };

  var _lastTime = getTime();

  this.getLastTime = function()
  {
    return(_lastTime);
  };

  if (typeof timeout != "number")
    timeout = 1000;

  this.getTimeout = function()
  {
    return(timeout);
  };

  this.setCheckInterval = function(newTimeout)
  {
    if (typeof timeout == "number")
    {
      timeout = newTimeout;
      if (_interval != -1)
        changeInterval(_interval, timeout);
    }
  };

  var checkPinValue = function()
  {
    var value = analogRead(watchPin);
    if (Math.abs(_lastValue - value) >= difference)
    {
      var time = getTime();
      if (typeof eventFunction == "function")
        eventFunction(
        {
          "value" : value,
          "valueAs7Bit" : value * 1024 | 0,
          "valueAsVolt" : value * E.getAnalogVRef(),
          "lastValue" : _lastValue,
          "lastValueAs7Bit" : _lastValue * 1024 | 0,
          "lastValueAsVolt" : _lastValue * E.getAnalogVRef(),
          "time" : time,
          "lastTime" : _lastTime
        });
      _lastValue = value;
      _lastTime = time;
      if (!repeat)
        clearInterval(_interval);
    }
  };

  var _interval = setInterval(checkPinValue, timeout);

  this.start = function()
  {
    if (_interval == -1)
      _interval = setInterval(checkPinValue, timeout);
  };

  this.stop = function()
  {
    clearInterval(_interval);
    _interval = -1;
  };

  this.isRunning = function()
  {
    return(_interval != -1);
  };
};

var wObj = new AnalogReadWatch(C4, function(data) { print(data); }, 1000, 0.01, true );