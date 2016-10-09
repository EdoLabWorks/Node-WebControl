## NodeJS-Web-Control-Project

A simple web control interface for the C# [IO-control module](https://github.com/EdoLabWorks/IO-ControlModule) or C++ [Cpp-ControlModule](https://github.com/EdoLabWorks/Cpp-ControlModule) using AngularJS and Node/ExpressJS.

[](https://github.com/EdoLabWorks/ximgs/blob/master/NodeWebControl.png)

### How it works
[](https://github.com/EdoLabWorks/ximgs/blob/master/canvas.png)

Using inter-process communication (IPC), we are sending control codes to the IO-control module.  In return, it will respond with a confirmation code using websocket.

Upon receiving a confirmation code, the web control client will show an ON/OFF message accordingly. 

The button will also change color showing an ON or OFF state condition confirming a successful connection with our backend control module.      

Make sure all dependencies are installed before running the application.

### Installation
To install all dependencies, use the following CLI command in the app folder.

~~~~
$ npm install
~~~~

To start the application, use the following CLI command in the app folder.   
~~~~
$ node app
~~~~

and type the following in your development PC browser address bar. 
~~~~
http://localhost:3000 
~~~~

Ensure [IO-control module](https://github.com/EdoLabWorks/IO-ControlModule) or the C++   [Cpp-ControlModule](https://github.com/EdoLabWorks/Cpp-ControlModule) is also running as a separate process.

### License
MIT 

