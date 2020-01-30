const questionOne = function questionOne(arr) {
    let sum=0;
    for(var i=0 ; i<arr.length ; i++)
    {
        sum=sum+arr[i]*arr[i];
    }
    return sum;
}

const questionTwo = function questionTwo(num) { 
    let fib = 0 , prev1=0 , prev2=1;
    if(num>0)
    {
    for(var i=1 ; i<num ; i++)
    {
            fib = prev1 + prev2;
            prev1 = prev2;
            prev2 = fib;
    }
    }    
    else
    {
        fib = 0;
    }
    return fib;
}


const questionThree = function questionThree(text) {
    let count = 0;
    let str = text.toString();
    for(var i=0 ; i<=str.length-1 ; i++)
    {
    var check=str.charAt(i);
    if(check == "a"||check == "e"||check == "i"||check == "o"||check == "u"||check == "A"||check == "E"||check == "I"||check == "O"||check == "U")
    {
        count++;
    }
    }
    return count;
}

const questionFour = function questionFour(num) {
    let fact = 1;
    if(num>=0)
    {
    for(var i=1 ; i<=num ; i++)
    {
        fact = fact*i;
    }
    }
    else
    {
        fact = "NaN"
    }
    return fact;
}

module.exports = {
    firstName: "VEDADNYA", 
    lastName: "JADHAV", 
    studentId: "10450603",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};