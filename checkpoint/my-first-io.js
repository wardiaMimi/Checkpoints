const fs = require ("fs");
const path = require("path");
const filePath=path.join(process.cwd(),'myfile.txt');
const buf= fs.readFileSync(filePath,{encording:"utf8",flag:"r"});
const str = buf.toString().split("\n");
console.log(str);
console.log(str.length-1);