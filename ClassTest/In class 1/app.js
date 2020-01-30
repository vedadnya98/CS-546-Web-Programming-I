const dictionary = require("./dictionary");
try{
    console.log(dictionary.checkInput("Hi"));
}
catch(error)
{
    console.log(error);
}
try{
    console.log(dictionary.checkInput("Hello"));
}
catch(error)
{
    console.log(error);
}

try{
    console.log(dictionary.lookupDefinition("Hi"));
}
catch(error)
{
    console.log(error);
}

try{
    console.log(dictionary.lookupDefinition("career"));
}
catch(error)
{
    console.log(error);
}

try{
    console.log(dictionary.getWord("Hi"));
}
catch(error)
{
    console.log(error);
}

try{
    console.log(dictionary.getWord("An occupation undertaken for a significant period of a person's life and with opportunities for progress."));
}
catch(error)
{
    console.log(error);
}
try{
    console.log(dictionary.getWord("a person who has successfully completed a course of study or training, especially a person who has been awarded an undergraduate academic degree."));
}
catch(error)
{
    console.log(error);
}
