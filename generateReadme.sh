searchWordBoundary()
{
	for filename in $(find . -iname "*.js" -exec grep -l -e "\b$1\b" {} \; ); do
		title=$(head -n 21 $filename | tail -1) 
		echo "* [$title]($filename)" >> README.md
	done
}

cat README-HEADER.md > README.md

echo "### Globals" >> README.md
echo "" >> README.md

echo "** variable HIGH **" >> README.md
searchWordBoundary HIGH

echo "** variable Infinity **" >> README.md
searchWordBoundary Infinity

echo "** variable LOW **" >> README.md
searchWordBoundary LOW

echo "** function analogRead(pin) **" >> README.md
searchWordBoundary analogRead

cat README-FOOTER.md >> README.md
