const fs = require("fs");
const path = require("path");

// make dir

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
// 	if(err){
// 		throw err;
// 	}
// 	console.log("Folder Created.");
// });

// make file and write in it

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("File created ");
//   }
// );

// override a file

// fs.writeFile(
// 	path.join(__dirname, "/test", "hello.txt"),
// 	"Hello World! I'm struggling.",
// 	(err) => {
// 		if (err) {
// 			throw err;
// 		}
// 		console.log("File created ");
// 	}
// );

// append to a file 

// fs.writeFile(
// 	path.join(__dirname, "/test", "hello.txt"),
// 	"Hello World!",
// 	(err) => {
// 		if (err) {
// 			throw err;
// 		}
// 		fs.appendFile(
// 			path.join(__dirname, "/test", "hello.txt"),
// 			" I'm struggling.",
// 			(err) => {
// 				if (err) {
// 					throw err;
// 				}
// 				console.log("File modified ");
// 			}
// 		);
// 		console.log("File created ");
// 	}
// );


// read file 

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data)=>{
// 	if(err){
// 		throw err;
// 	}
// 	console.log("---", data);
// });

// rename a file 

fs.rename(path.join(__dirname, '/test', "hello.txt"), 
	path.join(__dirname, '/test', "helloWorld.txt"), 
	(err) => {
		if(err) throw err;
		console.log("File renamed");
	}
)