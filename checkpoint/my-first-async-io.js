var fs = require('fs')
var path = require('path');
const filepath = path.join(process.cwd(),'myfile2.txt');
const buf= fs.readFile(filepath,function(err,data){
  if (err) 
  throw err
  const buf= data;
  const str = buf.toString().split("\n");
  console.log(str);
});