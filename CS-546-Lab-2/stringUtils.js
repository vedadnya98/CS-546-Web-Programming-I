function capitalize(string)
{
    if(typeof string !== 'string')
    {
        throw "ERROR : This is not an acceptable String"
    }
    else
    {
            let string1 = string.toLowerCase();
            string2 = string1.charAt(0).toUpperCase()+string1.substring(1);
        return string2;
    }
}
function repeat(string, num)
{
    if(typeof string !== 'string'||!string)
    {
        throw "ERROR : This is not an acceptable String"
    }
    else
    {
        if(num<0 || num === undefined || num ===null)
        {   
            throw "ERROR : This number is not acceptable"
        }
        else
        {   
            string1 = '';
            for(var i=0 ; i< num ; i++)
            {
                string1 = string1.concat(string);
            }
            return string1;
        }
    }
}
function countChars(string)
{
    if(typeof string !== 'string'|| string == undefined || string.length==0)
    {
        throw "ERROR : This is not an acceptable String"
    }
    else
    {
        let objCountChar = {};
        for(var i=0 ; i<string.length ; i++)
        {
            if(string.charAt(i) in objCountChar)
            {
                objCountChar[string.charAt(i)] +=1 ;
            }
            else
            {
                objCountChar[string.charAt(i)] = 1;
            }
        }
        return objCountChar;
    } 
}
module.exports = {
    capitalize,
    repeat,
    countChars
};