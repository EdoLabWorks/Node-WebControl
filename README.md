## NodeJS-Web-Control-Project

A simple web control interface for the C# [IO-control module](https://github.com/EdoLabWorks/IO-ControlModule) or C++ [Cpp-ControlModule](https://github.com/EdoLabWorks/Cpp-ControlModule) using AngularJS and Node/ExpressJS.

[](https://github.com/EdoLabWorks/ximgs/blob/master/NodeWebControl.png)

Turn ON and OFF the LED's in our backend control module using your mobile device/other PC in your private WiFi network.

### How it works
[](https://github.com/EdoLabWorks/ximgs/blob/master/canvas.png)

Using inter-process communication (IPC), we are sending control codes to the IO-control module.  In return, it will respond with a confirmation code using websocket.

Upon receiving a confirmation code, the web control client will show an ON/OFF message accordingly. 

The button will also change color showing an ON or OFF state condition confirming a successful connection with our backend control module.      

Make sure all dependencies are installed before running the application.

### Installation
To install all dependencies, use the following CLI command in the app folder.

~~~bash
$ npm install
~~~~

or
~~~bash
$ npm install express body-parser socket.io --save
~~~~


To start the application, use the following CLI command in the app folder.   
~~~bash
$ node app
~~~~

and type the following in your development PC browser address bar. 
~~~~
http://localhost:3000 
~~~~

Ensure [IO-control module](https://github.com/EdoLabWorks/IO-ControlModule) or the C++   [Cpp-ControlModule](https://github.com/EdoLabWorks/Cpp-ControlModule) is also running as a separate process.


### Using your Mobile Device
To test it from your mobile device/other PC, open a port from your development PC where the app is running. 
Get the local ip (IPv4 address) using ipconfig in Windows. Use the ip instead of localhost in your mobile device/other PC as shown below.
~~~~
http://192.168.1.169:3000 
~~~~
Note: Your ip will be different from the example above.
Your development PC and your mobile device/other PC must be connected to the same SSID of your WiFi network.  

### License
MIT 

