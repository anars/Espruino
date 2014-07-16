cat README-HEADER.md > README.md

echo "## Globals" >> README.md
echo "" >> README.md

echo "### function analogRead(pin)" >> README.md

for line in $(find . -iname "*.js" -exec grep -l -e "\banalogRead(\b" {} \; ); do
	echo "($line)" >> README.md
done

cat README-FOOTER.md >> README.md
