#!/bin/bash

for i in $(ls *.mp4)
do
  ffmpeg -i $i -vcodec libx264 -crf 30 ../smaller_vid/$i
  #ffmpeg -i $i -vcodec h264 -acodec aac ../smaller_vid/$i
done
