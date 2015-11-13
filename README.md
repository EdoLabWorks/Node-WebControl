# NodeJS-Web-Control-Project

A simple web control interface for the IO-control module using Angular and Node/ExpressJS.

You can turn ON and OFF remotely the LED's in the IO-control module using your mobile device/other PC in your private Wifi network.

![](https://github.com/EdoLabWorks/ximgs/blob/master/NodeWebControl.png)

It works by sending control codes to the IO-control module using IPC (inter-process communication).  The remote IO-control module in return will respond with a confirmation event code using websocket.

Upon receiving the confirmation code, the web control interface will show an ON/OFF message to each corresponding device HTML section. The button color will also change indicating an ON or OFF state condition.      

Make sure all dependencies are installed before running the application.

## Installation
To install all dependencies, use the following CLI command inside the app root folder.

~~~bash
$ npm install
~~~~

or
~~~bash
$ npm install express body-parser socket.io --save
~~~~


To start the application, use the following CLI command inside the app root folder.   
~~~bash
$ node app
~~~~

and type the following in your development PC browser address bar. 
~~~~
http://localhost:3000 
~~~~

To test it from your mobile device/other PC, open a port in your development or host PC where the app is running. 
Get the ip using ipconfig in Windows. Use the ip instead of localhost in your mobile device/other PC.

Your development or host PC and your mobile device/other PC must be connected to the same SSID of your WiFi network.  

Ensure the IO-control module is also running as a separate process.

## License
MIT 

