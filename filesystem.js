//This is an example for reading a html file from js file using file system

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('filesystem.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8081);




//this is an example for appending the file using file system.
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });




//this is an example for updating in file system
// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });




//this is an example for replacing usinf file system
// var fs = require('fs');
// fs.writeFile('mynewfile1.txt', 'helooooo VEDA!', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });




//this is example of dynamic
// const fs = require('fs');
// fs.readFile("./note.txt",'utf-8',(err,data1)=>
// {
//     fs.readFile(`./${data1}.txt`,'utf-8',(err,data2)=>
//     {
//         fs.writeFile(`./${data2}.txt`,'helooooo VEDA!',err =>
//         {
//             console.log(err);
//         });
//     });
// });




//this is an example for delete in file system
// var fs = require('fs');
// fs.unlink('mynewfile1.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });



//this is an example for renaming the file name
var fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});