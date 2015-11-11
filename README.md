# NodeJS-Web-Control-Project

A simple web control interface for the IO-control module using Angular and NodeJS/Express.

You can turn ON and OFF remotely the LED's in the IO-control module using your mobile device.

![](https://github.com/EdoLabWorks/ximgs/blob/master/NodeWebControl.png)

The application works by sending control codes to the IO-control module using IPC (inter-process communication).  The remote IO-control module in return will respond with a confirmation event code using websocket.

Upon receiving the confirmation code, the web control interface will show an ON/OFF message to each corresponding device HTML section. The button color will also change indicating an ON or OFF state condition.      

Make sure all dependencies (express, body-parser and socket.io) are installed before running the application.
~~~js
$ npm install express body-parser socket.io --save
~~~~

You can simply start it using the command  $node app  in CLI and open http://localhost:3000 from a browser on your dev PC or mobile device to access the web control interface.

Ensure the IO-control module is also running as a separate process.



