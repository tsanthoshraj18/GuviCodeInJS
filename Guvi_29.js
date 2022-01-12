const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let even = " ";
let odd = " ";
inp.on("line", (data) => {
     var fistdata = data.split("");
     console.log(fistdata)
     for (i=0;i<fistdata.length;i++)
     {
         if ( fistdata[i]%2 == 0 )
         {
            // even.push(fistdata[i])
            // console.log("even",fistdata[i].join(" "))
            even += fistdata[i]+" "
         }
         else
         {
            //  odd.push(fistdata[i])
            odd += fistdata[i]+" "
            //  console.log("odd",fistdata[i])
         }
     }
    //  console.log(even)
    //  console.log(odd)
    //   for (j=0;j<even.length;i++)
    //     {
    //      console.log(even[0]++even[1])
    //      console.log(odd[0]+" "+odd[1])
    //     }
    console.log(even.trim())
    console.log(odd.trim())
//     2 2 4
//3 3 3
    
});
