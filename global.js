console.log("File name :"+ __filename);
console.log("Directory name :"+ __dirname);

setTimeout(function(){console.log("hello from node")},2000);

console.log("Process id :"+ process.pid);
console.log("Current working directory :"+process.cwd() );