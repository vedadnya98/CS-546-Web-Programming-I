const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");

//// ARRAYUTILS ////
console.log("**ARRAY UTILS FUNCTIONS**");
console.log("");

 // Remove Tests
 console.log("REMOVE TESTS");
try {
    // Should Pass
    console.log(arrayUtils.remove([2,3,5,7,8,4] , 0));
 } catch (error) {
    console.log(error);
 }
 try {
    // Should Fail
    console.log(arrayUtils.remove([1,2,3,4],8));
 } catch (error) {
    console.log(error);
 }
 console.log("");
 
// countElements Tests
console.log("COUNTELEMENTS TESTS");
try {
   // Should Pass
   console.log(arrayUtils.countElements(['hi','hi','bye','hi','bye','1']));
} catch (error) {
   console.log(error);
}
try {
   // Should Fail
   console.log(arrayUtils.countElements());
} catch (error) {
   console.log(error);
}
console.log("");


//// STRINGUTILS //// 
console.log("**STRINGUTILS**");
console.log("");

//Repeat Tests
console.log("REPEAT TESTS");
try {
   // Should Pass
   console.log(stringUtils.repeat('hi',5));
} catch (error) {
   console.log(error);
}
try {
   // Should Fail
   console.log(stringUtils.repeat('hi',-1));
} catch (error) {
   console.log(error);
}
console.log("");

//// OBJUTILS ////
console.log("**OBJUTILS**");
console.log("");


// mapValues Tests
console.log("MAPVALUES TESTS");
   
try{
   //Should Pass
   console.log(objUtils.mapValues({a: 1, b: 2, c: 3 }, n => n * 5));
}
catch(error)
{
   console.log(error);
}

try{
   //Should Fail
   console.log(objUtils.mapValues([], n => n * 5));
}
catch(error)
{
   console.log(error);
}

try{
   console.log(stringUtils.repeat('abc',0))
}
catch(error)
{
   console.log(error);
}


try {
   // Should Pass
   console.log(arrayUtils.isEqual([1, 2, 3], [1, '2', 3]));
} catch (error) {
   console.log(error);
}
