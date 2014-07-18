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

Servo Object
by Kay Anar in July 13, 2014

*/

var Servo = {
	"_minPulse" : 0.1,
	"_maxPulse" : 2.3,
	"connect" : function(servoPin, feedbackPin)
	{
		if(typeof servoPin == "number")
			this.setServoPin(servoPin);

		if(typeof feedbackPin == "number")
			this.setFeedbackPin(feedbackPin);

		return(this);
	},
	"onMoveStart" : function()
	{
		print("onMoveStart");
	},
	"setMoveStart" : function(moveStart)
	{
		if(typeof moveStart == "function")
			this.onMoveStart = moveStart;
		return(this);
	},
	"onMoveEnd" : function()
	{
		print("onMoveEnd");
	},
	"setMoveEnd" : function(moveEnd)
	{
		if(typeof moveEnd == "function")
			this.onMoveEnd = moveEnd;
		return(this);
	},
	"setPosition" : function(position, time)
	{
		if (typeof time != "number" || time < 500)
			time = 500;

		if (typeof this._position != "number")
			this._position = this._minPulse;

        this._requestedPostion = position;
		this._stepAmount = (this._requestedPostion - this._position) / (time / 25);

		this.onMoveStart();

        var servoObj = this;
		servoObj._interval = setInterval(function()
		{
			servoObj._position += servoObj._stepAmount;
			if ((servoObj._stepAmount > 0 && (servoObj._position >= servoObj._requestedPostion || servoObj._position >= servoObj._maxPulse)) || (servoObj._stepAmount < 0 && (servoObj._position <= servoObj._requestedPostion || servoObj._position <= servoObj._minPulse)))
			{
				clearInterval(servoObj._interval);
				delete servoObj._interval;
				delete servoObj._requestedPostion;
				delete this._stepAmount;
				servoObj.onMoveEnd();
				servoObj = null;
			}
			else
			{
				digitalPulse(servoObj._servoPin, 1, E.clip(servoObj._position, servoObj._minPulse, servoObj._maxPulse));
			}
		}, 25);
    return(this);
    },
	"getPosition" : function()
	{
		return(_position);
	},
	"setServoPin" : function(servoPin)
	{
		this._servoPin = servoPin;
		return(this);
	},
	"getServoPin" : function()
	{
		return(this._servoPin);
	},
	"setFeedbackPin" : function(feedbackPin)
	{
		this._feedbackPin = feedbackPin;
		return(this);
	},
	"getFeedbackPin" : function()
	{
		return(this._feedbackPin);
	},
	"getFeedbackValue" : function()
	{
		if (this._feedbackPin !== undefined)
			return(analogRead(this._feedbackPin));
	},
	"setMinPulse" : function(minPulse)
	{
		if(typeof minPulse == "number")
			this._minPulse = minPulse;
		return(this);
	},
	"getMinPulse" : function()
	{
		return(this._minPulse);
	},
	"setMaxPulse" : function(maxPulse)
	{
		if(typeof maxPulse == "number")
			this._maxPulse = maxPulse;
		return(this);
	},
	"getMaxPulse" : function()
	{
		return(this._maxPulse);
	}
};

Servo.connect(C5, C4);

//print(Servo.getServoPin());
Servo.setPosition(0);
Servo.setMoveEnd(function() { Servo.setPosition(Servo.setMinPulse(), 5000); });
//Servo.setPosition(Servo.setMaxPulse(), 5000);
//Servo.setMoveEnd(function() { Servo.setPosition(Servo.setMinPulse(), 5000); });