# NodeJS-Web-Control-Project

A simple web control interface for the IO-ControlModule using Angular and NodeJS/Express.

You can turn ON and OFF remotely the LED's in the I/O control module using your mobile device.

![](https://github.com/EdoLabWorks/ximgs/blob/master/NodeWebControl.png)

The application works by sending control code to the IO-Control Module using IPC (inter-process communication).  The remote IO-Control Module in return should respond with a confirmation event code.

Upon receiving the confirmation code, the Web Control interface will show ON/OFF message to each corresponding device HTML section. The button will also change color indicating the switch is in ON or OFF state.      

Make sure all app dependencies (express, body-parser and socket.io) are installed before using the app. 

Start the app using the command $node app in CLI and open http://localhost:3000 in any browser on your dev PC.

Ensure the IO-Control Module is also running as a separate process.



