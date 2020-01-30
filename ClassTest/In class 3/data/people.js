const axios = require('axios');

async function getPeople()
      {
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
        return data // this will be the array of people
      }
  async function getPersonById(id){
    const data = await getPeople();
    const parsed = parseInt(id);
    if(parsed<1||parsed>500||!parsed||typeof parsed !== 'number'||parsed===undefined||parsed===null||!Number.isInteger(parsed))
    {
      throw "The ID is not valid";
    }
    else
    {
    for(var i=0 ; i<data.length ; i++)
    {
          personObj = data[i];
          if(parsed === personObj.parsed)
          {
            return personObj;
          }
    }
  }
}

  module.exports = {
    getPersonById,
    getPeople
};