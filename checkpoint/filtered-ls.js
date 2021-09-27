const fs = require('fs');
const path = require('path');
const filepath = process.argv[2];
const ext = '.' + process.argv[3];

 fs.readdir(filepath, function (err, files) {
  if (err) throw console.error(err)
  files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  }) 
}) 