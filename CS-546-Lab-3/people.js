const axios = require('axios');

async function getPeople()
      {
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
        return data // this will be the array of people
      }
  async function getPersonById(id){
    const data = await getPeople();
    if(id<1||id>500||!id||typeof id !== 'number'||id===undefined||id===null||!Number.isInteger(id))
    {
      throw "The ID is not valid";
    }
    else
    {
    for(var i=0 ; i<data.length ; i++)
    {
          personObj = data[i];
          if(id === personObj.id)
          {
            return personObj.firstName+" "+personObj.lastName;
          }
    }
  }
}


  async function lexIndex(index){
    const data = await getPeople();
    if(index<0||index>data.length-1||typeof index !== 'number'||index===undefined||index===null||!Number.isInteger(index))
    {
      throw "The Index is not valid";
    }
    else
    {
        data.sort((obj1,obj2) => {
          if(obj1.lastName>obj2.lastName)
            return 1;
          if(obj1.lastName<obj2.lastName)
            return -1;
        });
        var sortedData = data[index].firstName + " " + data[index].lastName;
        return sortedData;
      }
  }

  async function firstNameMetrics(){
    const data = await getPeople();
    let countCons=0 , countVowels=0;
    let longest = 0 , shortest =data.length;
    for(var i=0 ; i<data.length ; i++)
    {
      //console.log(data[i]);
      for(var j=0 ; j<data[i].firstName.length ; j++){
      var check = data[i].firstName.charAt(j);
      if(check == "a"||check == "e"||check == "i"||check == "o"||check == "u"||check == "A"||check == "E"||check == "I"||check == "O"||check == "U")
      {
        countVowels++;
      }
      else
      {
        countCons++;
      }
    }
    }
    for(var i=0 ; i<data.length ; i++)
    {
      if(data[i].firstName.length>longest)
      {
        var namelong = data[i].firstName;
        longest = data[i].firstName.length;
      }
      if(data[i].firstName.length<shortest)
      {
        var nameshort = data[i].firstName;
        shortest = data[i].firstName.length;
      }
    }
    let metricObj ={
                    totalLetters: countCons+countVowels,
                    totalVowels: countVowels,
                    totalConsonants: countCons,
                    longestName: namelong,
                    shortestName: nameshort
                  }
    return metricObj;
  }

  module.exports = {
    getPersonById,
    lexIndex,
    firstNameMetrics
};