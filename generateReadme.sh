searchWordBoundary()
{
	for filename in $(find . -iname "*.js" -exec grep -l -e "\b$1\b" {} \; ); do
		title=$(head -n 21 $filename | tail -1) 
		echo " * [$title]($filename)" >> README.md
	done
}

functionHeader()
{
	echo "" >> README.md
	echo "* $1" >> README.md
}

cat README-HEADER.md > README.md

echo "### Globals" >> README.md
echo "" >> README.md

functionHeader "variable HIGH"
searchWordBoundary HIGH

functionHeader "variable Infinity"
searchWordBoundary Infinity

functionHeader "variable LOW"
searchWordBoundary LOW

functionHeader "function analogRead(pin)"
searchWordBoundary analogRead

cat README-FOOTER.md >> README.md
