const path = require('path');

// whole file path 
console.log(__filename);

// base file name
console.log(path.basename(__filename));

// directory path
console.log(__dirname);

// base directory 
console.log(path.basename(__dirname));

//file ext 
console.log(path.extname(__filename));

//create Path object
console.log(path.parse(__filename));

// Concatenate Path
console.log(path.join(__dirname, "test", "hello.js"));