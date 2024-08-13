#!/bin/bash

count=1
for file in IMG_*; do
    if [ -f "$file" ]; then
        mv "$file" "IMG_$count.${file##*.}"
        count=$((count + 1))
    fi
done

