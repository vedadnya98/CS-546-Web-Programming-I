function head(array)
{
    if (!Array.isArray(array) || !array.length) {
        // array does not exist, is not an array, or is empty
        throw "ERROR : This is not an acceptable Array"
      }
    else
    {
        //console.log('Head element of the array is : ');
        return array[0];
    }
}
function last(array)
{
    if (!Array.isArray(array) || !array.length) {
        // array does not exist, is not an array, or is empty
        throw "ERROR : This is not an acceptable Array"
      }
    else
    {
        //console.log('Last element of the array is : ');
        return array[array.length-1];
    }
}
function remove(array, index)
{
    if (!Array.isArray(array) || !array.length) {
        // array does not exist, is not an array, or is empty
        throw "ERROR : This is not an acceptable Array"

    }
    else
    {
        if(index>array.length-1 || index<0 || index === null || !Number.isInteger(index))
        {   
            throw "ERROR : This index is out of bounds"
        }
        else
        {
        console.log('Array after removing the element at ' + index + ' is : ');
        array.splice(index , 1);
        return array;
        }
    }
}
function range(end, value)
{
    if( typeof end !== 'number' || end<=0 || !Number.isInteger(end) || !end)
    {
        throw "ERROR : The value of 'end' is not acceptable";
    }
    else
    {   
        let rangearray = [];
        if(value==undefined)
        {
            for(var i=0 ; i<end ; i++)
            {
                rangearray[i]=i;
            }
        }
        else
        {
            for(var i=0 ; i<end ; i++)
            {
                rangearray[i]=value;
            }
        }
        console.log("The new Array after Range function is : ")
        return rangearray;
    }
}
function countElements(array)
{
    if (!Array.isArray(array)) {
        // array does not exist
        throw "ERROR : This is not an acceptable Array"
      }
    else
    {
    let objCount = {};
    for(var i=0 ; i<array.length ; i++)
    {
        if(array[i] in objCount)
        {
            objCount[array[i]] +=1 ;
        }
        else
        {
            objCount[array[i]] = 1;
        }
    }
    return objCount;
    } 
}
function isEqual(arrayOne, arrayTwo)
{
    if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) 
    {
        // array does not exist, is not an array, or is empty
        throw "ERROR : This is not an acceptable Array"
    }
    else
    {
        if(arrayOne.length != arrayTwo.length)
        {
            return false;
        }
        else
        {
         for(var i=0; i<arrayOne.length; i++)
         {
            if (arrayOne[i]!== arrayTwo[i])
            {
                return false;

            }   
         }      
         return true;
        } 
    }
    
}
module.exports = {
    head,
    last,
    remove,
    range,
    countElements,
    isEqual
};