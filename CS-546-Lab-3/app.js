const people = require("./people");
const weather = require("./weather");
const work = require("./work");

async function main(){

    ////getPersonById Function
    try{
        const peoplebyID1 = await people.getPersonById(43) // Returns: "Brew Peat"
        console.log (peoplebyID1)
    }catch(e){
        console.log (e);
    }
    try{
        const peoplebyID2 = await people.getPersonById(-1) // Throws Error
        console.log (peoplebyID2)
    }catch(e){
        console.log (e);
    }
    try{
        const peoplebyID3 = await people.getPersonById(1000) // Throws Error
        console.log (peoplebyID3)
    }catch(e){
        console.log (e);
    }
    try{
        const peoplebyID4 = await people.getPersonById() // Throws Error 
        console.log (peoplebyID4)
    }
    catch(e){
        console.log (e);
    }

    console.log("");
    ////lexIndex Function
    try{
        const peoplelex1 = await people.lexIndex(2) // Returns: "Dermot Abberley"
        console.log (peoplelex1)
    }catch(e){
        console.log (e);
    }
    try{
        const peoplelex2 = await people.lexIndex(-1) // Throws Error
        console.log (peoplelex2)
    }catch(e){
        console.log (e);
    }
    try{
        const peoplelex3 = await people.lexIndex(1000) // Throws Error
        console.log (peoplelex3)
    }catch(e){
        console.log (e);
    }
    try{
        const peoplelex4 = await people.lexIndex() // Throws Error
        console.log (peoplelex4)
    }
    catch(e){
        console.log (e);
    }

    try{
        const peoplelex5 = await people.lexIndex(0); // Returns : Olivette Aarons
        console.log (peoplelex5)
    }catch(e){
        console.log (e);
    }


    console.log("");
    //firstNameMetrics Function
    try{
        const peoplemetrics= await people.firstNameMetrics();
        console.log (peoplemetrics)
    }catch(e){
        console.log (e);
    }

    console.log("");
    ////shouldTheyGoOutside Function
    try{
        const peopleweather1 = await weather.shouldTheyGoOutside("Baird","Sitch");
        console.log (peopleweather1)
    }catch(e){
        console.log (e);
    }
    try{
        const peopleweather2 = await weather.shouldTheyGoOutside("Scotty", "Barajaz") // Returns "Yes, Scotty should go outside."
        console.log (peopleweather2)
    }
    catch(e){
        console.log (e);
    }
    try{
        const peopleweather3 = await weather.shouldTheyGoOutside("Calli", "Ondrasek") // Returns "No, Calli should not go outside."
        console.log(peopleweather3)
    }
    catch(e){
        console.log (e);
    }
    try{
        const peopleweather4= await weather.shouldTheyGoOutside() // Throws Error
        console.log (peopleweather4)
    }
    catch(e){
        console.log (e);
    }
    try{
        const peopleweather5= await weather.shouldTheyGoOutside("Bob") // Throws Error
        console.log (peopleweather5)
    }
    catch(e){
        console.log (e);
    }
    try{
        const peopleweather6= await weather.shouldTheyGoOutside("Bob", "Smith") // Throws Error
        console.log (peopleweather6)
    }
    catch(e){
        console.log (e);
    }

    console.log("");
    ////whereDoTheyWork Function
    try{
        const peoplewhere1 = await work.whereDoTheyWork("Demetra", "Durrand") // Returns: "Demetra Durrand - Nuclear Power Engineer at Buzzshare. They will be fired."
        console.log (peoplewhere1)
    }
    catch(e){
        console.log (e);
    }
    try{
        const peoplewhere2 = await work.whereDoTheyWork("Hank", "Tarling") // Returns: "Hank Tarling - Technical Writer at Babbleblab. They will not be fired."
        console.log (peoplewhere2)
    }
    catch(e){
        console.log (e);
    }
    try{
        const peoplewhere3 = await work.whereDoTheyWork() // Throws Error
        console.log (peoplewhere3)
    }
    catch(e){
        console.log (e);
    }
    try{
        const peoplewhere4 = await work.whereDoTheyWork("Bob") // Throws Error
        console.log (peoplewhere4)
    }
    catch(e){
        console.log (e);
    }
    try{
        const peoplewhere5  = await work.whereDoTheyWork("Bob", "Smith") // Throws Error
        console.log (peoplewhere5)
    }
    catch(e){
        console.log (e);
    }
    console.log("");
    ////findTheHacker Function
    try{
        const peopledata13 = await work.findTheHacker("1.1.1.1") // Returns: "Robert Herley is the hacker!"
        console.log (peopledata13)
    }
    catch(e){
        console.log (e);
    }
    try{
        const peopledata14 = await work.findTheHacker("foobar") // Throws Error
        console.log (peopledata14)
    }
    catch(e){
        console.log (e);
    }
    try{
        const peopledata15 = await work.findTheHacker() // Throws Error
        console.log (peopledata15)
    }
    catch(e){
        console.log (e);
    }
}

//call main
main()