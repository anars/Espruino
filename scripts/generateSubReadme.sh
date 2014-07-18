#!/bin/sh


for directory in $(find . -type d | grep -v "./.git" | grep -v "./scripts"); do
	if [ "$directory" != "." ]
	then
		name=$(basename $directory) 
#		echo "$directory/$name.js"
		if [ -e "$directory/$name.js" ]
		then
			title=$(head -n 20 $directory/$name.js | tail -1)
			echo "# $title" > $directory/README.md
			echo "" >> $directory/README.md
			author=$(head -n 21 $directory/$name.js | tail -1)
			echo "**$author**" >> $directory/README.md
			echo "" >> $directory/README.md
			if [ -e "$directory/$name.md" ]
			then
				cat $directory/$name.md >> $directory/README.md
				echo "" >> $directory/README.md
				echo "" >> $directory/README.md
			fi
			if [ -e "$directory/$name.png" ]
			then
				echo "## Board Setup" >> $directory/README.md
				echo "![Board Setup]($name.png \"Board Setup for $title\")" >> $directory/README.md
				echo "" >> $directory/README.md
				echo "" >> $directory/README.md
			fi
			if [ -e "$directory/$name.txt" ]
			then
				echo "## Sample Output" >> $directory/README.md
				echo "\`\`\`\`" >> $directory/README.md
				cat $directory/$name.txt >> $directory/README.md
				echo "\`\`\`\`" >> $directory/README.md
			fi
		fi
	fi
done
