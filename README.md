# NodeJS-Web-Control-Project

A simple web control interface for the IO-control module using Angular and NodeJS/Express.

You can turn ON and OFF remotely the LED's in the IO-control module using your mobile device.

![](https://github.com/EdoLabWorks/ximgs/blob/master/NodeWebControl.png)

The application works by sending control codes to the IO-control module using IPC (inter-process communication).  The remote IO-control module in return will respond with a confirmation event code using websocket.

Upon receiving the confirmation code, the web control interface will show an ON/OFF message to each corresponding device HTML section. The button color will also change indicating an ON or OFF state condition.      

Make sure all dependencies (express, body-parser and socket.io) are installed before running the application.

To install all dependencies, use the following CLI command inside the app root folder.

~~~bash
$ npm install
~~~~

or
~~~bash
$ npm install express body-parser socket.io --save
~~~~


To start the application, use the following command inside the app root folder.   
~~~bash
$ node app
~~~~

and type the following in your browser address bar. 
~~~~
http://localhost:3000 
~~~~


Ensure the IO-control module is also running as a separate process.



