## Install hardware on rapsberryPi

First download and buil wiringPi library

````bash
git clone git://git.drogon.net/wiringPi
cd wiringPi/wiringPi
sudo su
./build
````

Compile the send.cpp file with makefile

````bash
make
````

## Use the program

````bash
sudo ./send 0 11111111 1 on
````
- 0 param is group param
- 11111111 param is the remote id
- 1 param is device to controll
- on param is the command [On | Off]
