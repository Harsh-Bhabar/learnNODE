const url = require('url');

const myUrl = new URL('https://mywebstie.com:8000/hello.html?id=100&status=acrive');

// serialized url 

console.log(myUrl.href);
console.log(myUrl.toString());

// host / root 

console.log(myUrl.hostname); // dont give us port
console.log(myUrl.host);

// pathname

console.log(myUrl.pathname);

// query 

console.log(myUrl.search);

// query object
console.log(myUrl.searchParams);