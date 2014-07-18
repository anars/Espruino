# Print Function Test

**by Kay Anar in July 3, 2014**

## Sample Output
````
 _____                 _
|   __|___ ___ ___ _ _|_|___ ___
|   __|_ -| . |  _| | | |   | . |
|_____|___|  _|_| |___|_|_|_|___|
          |_| http://espruino.com
 1v67 Copyright 2014 G.Williams
>echo(0);
---
null
line 1
Line 2
return 2
tab
pretab	posttab
'
joey's
joez's
"
joe "the ripper"
joez"
bacspace
formeed
 
---
true
true false
true
[true,false,true,true]
---
7
2 5
3
[3,5,12,-10,0]
---
23.23
532.32 2321.21312100000
3.14
[232.21312099999,111.010101,-0.0001,0,1.999999]
---
Hello
Hello world
Joe Doe
[
  "Hello",
  "John",
  "and",
  "Jane",
  "Doe"
]
---
function () { return("x"); }
function () { return(42); }
---
Hello false 4 122.23121211000 function () { return(1); }
[
  "Hello",
  true,1,3,14,
  function () { return(false); }
]
---
{"a":1,"b":false}
{
  "firstName":"John",
  "lastName":"Doe",
  "age":50,
  "eyeColor":"blue",
  "getAge":function () {
        this.age++;
        return(this.age);
      }
}
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
=undefined
Uncaught SyntaxError: Got ')' expected EOF
 at line 1 col 94
...", "13", "14", "15", "16", "17");
                               ^
 at line 1 col 98
...13", "14", "15", "16", "17");
                               ^
> 
````


## Bug tracker

Have a bug? Please create an [issue](https://github.com/anars/Espruino/issues) here on GitHub!

## Twitter account

Keep up to date on announcements and more by following Anar Software LLC on Twitter, [@AnarSoft](http://twitter.com/AnarSoft).

## Contributing

1. Fork it.
2. Create a branch (`git checkout -b myEspruino`)
3. Commit your changes (`git commit -am "Added New Espruino Sample"`)
4. Push to the branch (`git push origin myEspruino`)
5. Create an [issue](https://github.com/anars/Espruino/issues) with a link to your branch

## License

Espruino by Examples < http://git.io/ebe >

Copyright (c) 2014 Anar Software LLC. < http://anars.com >

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details at http://www.gnu.org/licenses/gpl.html


