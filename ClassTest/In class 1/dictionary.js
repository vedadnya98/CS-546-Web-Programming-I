const words ={
    internship: "The position of a student or trainee who works in an organization, sometimes without pay, in order to gain work experience or satisfy requirements for a qualification",
    job : "A task or piece of work, especially one that is paid",
    career : "An occupation undertaken for a significant period of a person's life and with opportunities for progress.",
    graduate : "a person who has successfully completed a course of study or training, especially a person who has been awarded an undergraduate academic degree.",
    technology : "the application of scientific knowledge for practical purposes, especially in industry.",
    institute : "a society or organization having a particular object or common factor, especially a scientific, educational, or social one."
}
function checkInput(input)
{
   if(typeof input !== 'string')
    throw "This is not a string";
   else
    return input;
}
const lookupDefinition = function lookupDefinition(str)
{
    checkInput(str);
    if (words[str] !== undefined)
     return words;
    else
     throw "The word is undefined"; 
}
const getWord = function getWord(str2)
{
    checkInput(str2);
    var key = console.log(Object.keys(words).find(key => words[key] === str2));
    if (words[str2] !== undefined)
     return words;
    else
     throw "The word is undefined";
}
module.exports = {
    checkInput,
    lookupDefinition,
    getWord
};