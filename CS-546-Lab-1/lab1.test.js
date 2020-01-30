const lab1 = require("./lab1");

console.log("questionOne Outputs:")
console.log(lab1.questionOne([1, 2, 3])); 
// should output 14
console.log(lab1.questionOne([5, 3, 10])); 
// should output 134
console.log(lab1.questionOne([2, 1, 2])); 
// should output 9
console.log(lab1.questionOne([5, 10, 9])); 
// should output 206
console.log(lab1.questionOne([-2, 4, 6])); 
// should output 56

console.log("");

console.log("questionTwo Outputs:")
console.log(lab1.questionTwo(7)); 
// should output 13 
console.log(lab1.questionTwo(9)); 
// should output 34
console.log(lab1.questionTwo(0)); 
// should output 0
console.log(lab1.questionTwo(21)); 
// should output 10946
console.log(lab1.questionTwo(-7)); 
// should output 0

console.log("");

console.log("questionThree Output:")
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere."));
// should output 196
console.log(lab1.questionThree("I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best"));
// should output 60
console.log(lab1.questionThree("Don’t walk in front of me… I may not follow,Don’t walk behind me… I may not lead,Walk beside me… just be my friend"));
// should output 30
console.log(lab1.questionThree("Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do."));
// should output 161
console.log(lab1.questionThree("1234567890"));
// should output 0

console.log("");

console.log("questionFour Output:")
console.log(lab1.questionFour(10));
// should output 3628800
console.log(lab1.questionFour(8));
// should output 40320
console.log(lab1.questionFour(11));
// should output 39916800
console.log(lab1.questionFour(3));
// should output 6
console.log(lab1.questionFour(6));
// should output 720