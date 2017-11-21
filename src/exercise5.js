exports.run = function(input) {
  console.log("Exercise #5");
};


var fs = require('fs');
var path = require('path');

function run(directory){

  fs.readdir (directory, function callback (err, list){
      for (var i=0; i<list.length;i++){
          console.log(list[i])
      }
  });
}

fs.readdir(process.argv[2],callback);