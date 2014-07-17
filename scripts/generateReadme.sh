#!/bin/sh

searchWordBoundary()
{
	for filename in $(find . -iname "*.js" -exec grep -l -e "\b$1\b" {} \; ); do
		title=$(head -n 20 $filename | tail -1) 
		echo " * [$title]($filename)" >> README.md
	done
}

functionHeader()
{
	echo "" >> README.md
	echo "* $1" >> README.md
}

cat scripts/README-HEADER.md > README.md

echo "### Globals" >> README.md
echo "" >> README.md


functionHeader "variable HIGH"
searchWordBoundary HIGH

functionHeader "variable Infinity"
searchWordBoundary Infinity

functionHeader "variable LOW"
searchWordBoundary LOW

functionHeader "variable NaN"
searchWordBoundary NaN

functionHeader "function analogRead(pin)"
searchWordBoundary analogRead

functionHeader "function analogWrite(pin, value, options)"
searchWordBoundary analogWrite

functionHeader "variable arguments"
searchWordBoundary arguments

functionHeader "function atob(binaryData)"
searchWordBoundary atob

functionHeader "function btoa(binaryData)"
searchWordBoundary btoa

functionHeader "function changeInterval(id, time)"
searchWordBoundary changeInterval

functionHeader "function clearInterval(id)"
searchWordBoundary clearInterval

functionHeader "function clearTimeout(id)"
searchWordBoundary clearTimeout

functionHeader "function clearWatch(id)"
searchWordBoundary clearWatch

functionHeader "function digitalPulse(pin, value, time)"
searchWordBoundary digitalPulse

functionHeader "function digitalRead(pin)"
searchWordBoundary digitalRead

functionHeader "function digitalWrite(pin, value)"
searchWordBoundary digitalWrite

functionHeader "function dump()"
searchWordBoundary dump

functionHeader "function echo(echoOn)"
searchWordBoundary echo

functionHeader "function edit(funcName)"
searchWordBoundary edit

functionHeader "function eval(code)"
searchWordBoundary eval

functionHeader "function getPinMode(pin)"
searchWordBoundary getPinMode

functionHeader "function getSerial()"
searchWordBoundary getSerial

functionHeader "function getTime()"
searchWordBoundary getTime

functionHeader "function isNaN(x)"
searchWordBoundary isNaN

functionHeader "function load()"
searchWordBoundary load

functionHeader "function parseFloat(string)"
searchWordBoundary parseFloat

functionHeader "function parseInt(string, radix)"
searchWordBoundary parseInt

functionHeader "function peek16(addr)"
searchWordBoundary peek16

functionHeader "function peek32(addr)"
searchWordBoundary peek32

functionHeader "function peek8(addr)"
searchWordBoundary peek8

functionHeader "function pinMode(pin, mode)"
searchWordBoundary pinMode

functionHeader "function poke16(addr, value)"
searchWordBoundary poke16

functionHeader "function poke32(addr, value)"
searchWordBoundary poke32

functionHeader "function poke8(addr, value)"
searchWordBoundary poke8

functionHeader "function print(text, ...)"
searchWordBoundary print

functionHeader "function require(moduleName)"
searchWordBoundary require

functionHeader "function reset()"
searchWordBoundary reset

functionHeader "function save()"
searchWordBoundary save

functionHeader "function setBusyIndicator(pin)"
searchWordBoundary setBusyIndicator

functionHeader "function setDeepSleep(sleep)"
searchWordBoundary setDeepSleep

functionHeader "function setInterval(function, timeout)"
searchWordBoundary setInterval

functionHeader "function setSleepIndicator(pin)"
searchWordBoundary setSleepIndicator

functionHeader "function setTimeout(function, timeout)"
searchWordBoundary setTimeout

functionHeader "function setWatch(function, pin, options)"
searchWordBoundary setWatch

functionHeader "function trace(root)"
searchWordBoundary trace

cat scripts/README-FOOTER.md >> README.md
