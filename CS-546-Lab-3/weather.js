const axios = require('axios');

async function getPeople()
      {
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
        return data // this will be the array of people
      }

async function getWeather(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
    return data // this will be the array of weather
  }

  async function shouldTheyGoOutside(firstName, lastName){
    const weather = await getWeather();
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
            for(var j=0 ; j<weather.length ; j++)
            {
              weatherObj = weather[j];
              if(personObj.zip === weatherObj.zip)
              {
              if(weatherObj.temp >= 34)
               return "Yes , "+personObj.firstName+" should go outside"
              else
               return "No , "+personObj.firstName+" should not go outside"
              }
            }
          }
    }
    if(check === 0)
    {
      throw "Name : " + firstName + " " + lastName + " not found in People"
    }
  }
}

  module.exports = {
    shouldTheyGoOutside
};