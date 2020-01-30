function extend(...args)
{   
    var check=0;
    for(var i=0 ; i<args.length ; i++)
    {
    if(typeof args[i] !== 'object'|| typeof args[i] === undefined || !args[i] || args[i].constructor === Array)
    {
        check++;
    }
    }
    //check conditions
    if(check>0)
    {
        throw "Object is not proper";
    }
    else if(args.length < 2)
    {
        throw "No. of Paramters should be atleast 2";
    }
    else
    {
    let extendObj = {};
    for(var i=0 ; i<args.length ; i++)
    {
        let firstObj = args[i];
        for(let key in firstObj)
        {
            if(!(key in extendObj))
            extendObj[key] = firstObj[key];
        }
    }
    return extendObj;
    }
}    
function smush(...args)
{
    var check=0;
    for(var i=0 ; i<args.length ; i++)
    {
    if(typeof args[i] !== 'object' || typeof args[i] === undefined || !args[i]|| args[i].constructor === Array)
    {
        check++;
    }
    }
    if(check>0)
    {
        throw "Object is not proper";
    }
    else if(args.length < 2)
    {
        throw "No. of Paramters should be atleast 2";
    }
    else
    {
        let smushObj = {};
        for(var i=0 ; i<args.length ; i++)
        {
            var firstObj = args[i];
            for(let key in firstObj)
            {
                if(smushObj[key] !== firstObj)
                    smushObj[key]=firstObj[key];
            }
        }
        return smushObj;
    }
}
function mapValues(object, func)
{
    //check conditions
    if(typeof object !== 'object' || object.length === 0 || object.constructor === Array )
    {
        throw "ERROR : Object is not proper"
    }
    else if(  typeof func !== 'function' || !func)
        {
            throw "ERROR : Function is not proper"
        }
    else
    {
    for(key in object)
    {
     object[key] = func(object[key]);
    }
    return object;
}
}
module.exports = {
    extend,
    smush,
    mapValues
};