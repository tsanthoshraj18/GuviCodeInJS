// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
//   const inputString = data.toString();
//   const userArray = inputString.split(",");
//  console.log(inputArray);// array of given inputs
// //Your code goes here
});
inp.on("close",() => {
    var ans = 0
    // console.log(userInput.length)
    for(i=0;i<userInput.length;i++){
        // console.log(i)
        // console.log()
        var somthing = userInput[i].split(" ");
        // console.log(somthing)
        // console.log(somthing.length)
        for (j=0;j<somthing.length;j++){
            ans += parseInt(somthing[j])
            // console.log(somthing[j])
        
        }
        
        
        
        //  console.log(parseInt(somthing))
    }
    console.log(parseInt(ans))
    
// var somthing = userInput[0].split(" ");
// var somthing1 = userInput[1].split(" ");
// var somthing2 = userInput[2].split(" ");

// var add = parseInt(somthing[0])+parseInt(somthing[1])+parseInt(somthing[2])+parseInt(somthing1[0])+parseInt(somthing1[1])+parseInt(somthing1[2])+parseInt(somthing2[0])+parseInt(somthing2[1])+parseInt(somthing2[2])
// console.log(add)
})
