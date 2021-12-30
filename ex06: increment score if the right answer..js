var readlinesync = require('readline-sync');//importing readline sync and using it
var score = 0;
var name = readlinesync.question("Your name: ");//Geting input by using readline sync
var age = readlinesync.question("Your age: ");//Geting input by using readline sync
//we are using condition 
if (18 < age ){
  console.log("your Adult")
  score = score + 1//incremen 
  console.log("Score is: ",score)
}
else{
  console.log("your not am Adult")
  score = score - 1
  console.log("Score is: ",score)
}
