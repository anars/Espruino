/**
* Espruino Print Function Test
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

This script for testing Print function of Espruino

Created 3 July 2014
by Kay Anar

*/

var booleanVar = true;
var booleanArr = [ true, false, true, true ];

var integerVar = 3;
var integerArr = [ 3, 5, 12, -10, 0];

var floatVar = 3.14;
var floatArr = [232.213121, 111.0101010, -0.0001, 0.0, 1.999999];

var stringVar = "Joe Doe";
var stringArr = ["Hello", "John", "and", "Jane", "Doe"];

var functionVar = function() { return(42); };

var mixedArr = ["Hello", true, 1, 3,14, function() { return(false); }];

var objectVar =
    {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    getAge:function() 
      {
        this.age++;
        return(this.age);
      }
    };


print("---");
print(null);
print("");
print("\n");
print("\r");
print("\n\r");
print("\ttab");
print(" ");

print("---");
print(true);
print(true, false);
print(booleanVar);
print(booleanArr);


print("---");
print(7);
print(2, 5);
print(integerVar);
print(integerArr);

print("---");
print(23.23);
print(532.32, 2321.213121);
print(floatVar);
print(floatArr);

print("---");
print("Hello");
print("Hello", "world");
print(stringVar);
print(stringArr);

print("---");
print(function() { return("x"); });
print(functionVar);

print("---");
print("Hello", false, 4, 122.23121211, function() { return(1); });
print(mixedArr);

print("---");
print({a : 1, b : false});
print(objectVar);