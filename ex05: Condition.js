var readlinesync = require('readline-sync');//importing readline sync and using it
var name = readlinesync.question("Your name: ");//Geting input by using readline sync
var age = readlinesync.question("Your age: ");//Geting input by using readline sync
//we are using condition 
if (18 < age ){
  console.log("your Adult")
}
else{
  console.log("your not am Adult")
}
