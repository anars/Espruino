# Extended Math Object

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
 
Math.map(512, 0, 1023, 0, 100);
50.04887585532
 
Math.map(-512, 0, 1023, 0, 100);
-50.04887585532
 
Math.constrain(Math.map(-512, 0, 1023, 0, 100), 0, 1023);
0
 
Math.floatToInt(Math.map(512, 0, 1023, 0, 100));
50
=undefined
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


