#!/usr/bin/env python
#CHANGED FOR 2.7 westelm
#rename script by Chrisstring,
#updated the folder names for consistency

#Please see copyFilesSample.csv for an example of how the CSV file needs to be constructed!

import os, csv, shutil

def renameFunction(sinput,soutput):
    for fileName in fileList:
        if fileName.startswith(sinput):
            shutil.copy2(fileName,os.path.join(inputPath,"_renamed\\",fileName.replace(sinput,soutput)))
            print("{} was found\trenamed to [{}]".format(fileName,fileName.replace(sinput,soutput)))



print("Welcome to the SUPER COPY Number 1")
inputPath = input("Please enter the path by hitting [ SHIFT ] + [ INS ]:")
if os.path.isdir(os.path.join(inputPath,"_renamed")):
    pass
else:
    os.mkdir(os.path.join(inputPath,"_renamed"))

#makedir if it doesn't exist

print()
print()
print("=========== CSV MUST HAVE FIRST COLUMN IS INPUT name, SECOND COLUMN IS OUTPUT name============")
csvPath = input("Please enter the FULL path to the file-list.csv:")

fileList = os.listdir(inputPath)
os.chdir(inputPath)

#remove directories
for fileName in fileList:
        if os.path.isdir(os.path.join(inputPath,fileName)):
            fileList.remove(fileName)

#open csvreader
csvReader = csv.reader(open(csvPath,newline=''),delimiter=',')
for row in csvReader:
    renameFunction(row[0],row[1])



#items removed
#print("This is the fileList")
#print("searching for T534062")
#change to the directory
