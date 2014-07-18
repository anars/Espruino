#!/bin/sh

for filename in $(find . -iname "*.js" ); do
	cat scripts/copyright-notice.txt > $filename.tmp
	firstLine=$(head -n 1 $filename) 
	if [ "$firstLine" == "/**" ]
	then
		tail +18 $filename >> $filename.tmp
	else
		cat $filename >> $filename.tmp
	fi
	mv -f $filename.tmp $filename
done
