const axios = require('axios');


async function getPeople()
      {
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
        return data // this will be the array of people
      }

async function getPersonById(strId)
{  
    const id = Number(strId);
    let check = false;
    const data = await getPeople();
    if(!id||typeof id !== 'number'||id===undefined||id===null||isNaN(id))
    {
      throw "The ID is not valid";
    }
    else
    {
    for(var i=0 ; i<data.length ; i++)
    {     
          personObj = data[i];
          if(id == personObj.id)
          {
            check = true;
            return personObj;    
          }
    }
    if(check === false)
    {
        throw "The ID is not present in People";
    }
  }
}

async function search(nameStr)
{
    let objArray = [];
    let check = false;
    let name = "";
    const data = await getPeople();
    if(!nameStr||typeof nameStr !== 'string'||nameStr===undefined||nameStr===null)
    {
      throw "The name is not valid";
    }
    else
    {
    for(var i=0 ; i<data.length ; i++)
    {     
          nameStr = nameStr.toLowerCase();
          personObj = data[i];
          var first = personObj.firstName;
          first = first.toLowerCase();
          var space = " ";
          var last = personObj.lastName;
          last = last.toLowerCase();
          name = first.concat(space , last);
          if(name.includes(nameStr))
          {
            check = true;
            objArray.push(personObj);    
          }
          if(objArray.length == 20)
         {
            return objArray;
         }
    }
    if(check === false)
    {
        throw "The ID is not present in People";
    }
    return objArray;
  }

}

module.exports = {
    getPersonById,
    search
};