let chiproc = require('child_process');

//any application you want to open just write how to open it using CMD. AND WRITE BELOW.    
//open calculator
chiproc.execSync("calc");    

//opening google
chiproc.execSync("start chrome https://www.google.com");

//running code files
console.log(chiproc.execSync("node program.js").toString());

