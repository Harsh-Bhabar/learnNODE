const os = require('os');

// platform 
console.log(os.platform());

// cpu arch 
console.log(os.arch());

// cpu core
console.log(os.cpus());

// free memory 
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home dir 
console.log(os.homedir());

// uptime
console.log(os.uptime());