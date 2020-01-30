const axios = require('axios');

async function getWork(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    return data // this will be the array of work
  }

  async function getPeople()
  {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
  }  

  async function whereDoTheyWork(firstName, lastName){
    const work = await getWork();
    const data = await getPeople();
    let check = 0;
    if(!firstName||!lastName||typeof firstName !== 'string'||typeof lastName !== 'string')
    {
      throw "The input is not valid";
    }
    else
    {
    for(var i=0 ; i<data.length ; i++)
    {
          personObj = data[i];
          if(firstName === personObj.firstName && lastName === personObj.lastName)
          {
            check++;
            for(var j=0 ; j<work.length ; j++)
            {
              workObj = work[j];
              if(personObj.ssn === workObj.ssn)
              {
              if(workObj.willBeFired === true)
               return personObj.firstName+" "+ personObj.lastName + " - " + workObj.jobTitle + " at " + workObj.company + ". They will be fired."
              else
               return personObj.firstName+" "+ personObj.lastName + " - " + workObj.jobTitle + " at " + workObj.company + ". They will not be fired."
              }
            }
          }
    }
    if(check === 0)
    {
      throw "Name : " + firstName + " " + lastName + " not found in People";
    }
  }

  }

  async function findTheHacker(ip){
    const work = await getWork();
    const data = await getPeople();
    let check = 0;
    if(!ip||ip===undefined||ip===null||typeof ip !== 'string')
    {
      throw "The input is not valid";
    }
    else if (!ip.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/))
    {
     throw "The given string is not an IP Address"
    }
    else
    {
    for(var i=0 ; i<data.length ; i++)
    {
          workObj = work[i];
          if(ip === workObj.ip)
          {
            check++;
            for(var j=0 ; j<data.length ; j++)
            {
              personObj = data[j]
              if(personObj.ssn === workObj.ssn)
              {
                return personObj.firstName + " " + personObj.lastName + " is the hacker";
              }
            }
          }
  }
  if(check === 0)
    {
      throw "IP Address is not present in Work"
    }
}
}

  module.exports = {
    whereDoTheyWork,
    findTheHacker  
};