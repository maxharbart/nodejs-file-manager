Task: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md

Start command: `npm run start -- --username=your_username`
Stop command: `.exit`

navigation: `cd path_to_directory`, `up`, `ls`

**IMPORTANT:**

"up.js" is written for unix systems. If you're testing it on windows, update code like this:
`.includes(__rootDir + "\\")`

example of usage of "compress" function:
`compress file.txt file.br` - compresses to current folder

example of usage of "decompress" function:
`compress file.br file.txt` - decompresses to current folder

**other commands:**

Basic operations with files

Read file and print it's content in console (should be done using Readable stream):
`cat path_to_file`

Create empty file in current working directory:
`add new_file_name`

Rename file (content should remain unchanged):
`rn path_to_file new_filename`

Copy file (should be done using Readable and Writable streams):
`cp path_to_file path_to_new_directory`

Move file:
`mv path_to_file path_to_new_directory`

Delete file:
`rm path_to_file`

Operating system info (prints following information in console)

Get EOL (default system End-Of-Line) and print it to console
`os --EOL`

Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console
`os --cpus`

Get home directory and print it to console
`os --homedir`

Get current system user name (Do not confuse with the username that is set when the application starts) and print it to console
`os --username`

Get CPU architecture for which Node.js binary has compiled and print it to console
`os --architecture`

Hash calculation

Calculate hash for file and print it into console
`hash path_to_file`
