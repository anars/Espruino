cat README-HEADER.md > README.md

echo "### Globals" >> README.md
echo "" >> README.md

echo "**function analogRead(pin)**" >> README.md

for filename in $(find . -iname "*.js" -exec grep -l -e "\banalogRead(\b" {} \; ); do
	title=$(head -n 21 $filename | tail -1) 
	echo "* [$title]($filename)" >> README.md
done

cat README-FOOTER.md >> README.md
