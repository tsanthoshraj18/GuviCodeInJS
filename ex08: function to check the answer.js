function ex_8(question,answer){
  var get_input = prompt("Enter your answer:");
  var score = 0;
  if (answer = get_input){
    console.log("your correst");
    console.log("score is:",score+1);
  }
  else{
    console.log("wrong");
    console.log("score",score-1);
  }
}
var real_question = prompt("your question");
var real_name = prompt("your real expected answer");
ex_8(real_question,real_name)
