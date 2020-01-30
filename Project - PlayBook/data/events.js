const collections = require('../config/mongoCollections');
const eventsData = collections.events;
const mapsData = collections.maps;
var ObjectId = require('mongodb').ObjectId;

module.exports = {
    async eventUpdateStatus(eventId, status) {
        console.log("event status update");
        const updatedEvent = {
            status: status
        }
        console.log("updated event");
        console.log(updatedEvent);
        console.log(eventId);
        const eventCollection = await eventsData();
        //const mapsCollection = await mapsData(); 
        const res = await eventCollection.updateOne({ _id: ObjectId(eventId) }, { $set: updatedEvent });
        console.log("update eventt");
        //console.log(res);
    },

    async createEvents(creatorEmail, sports, location, date, notes, noOfPlayers, status, playersList) {
        console.log("entered create events");
        try {
            const eventsCollection = await eventsData();

            let new_events =
            {
                creatorEmail: creatorEmail,
                sports: sports,
                location: location,
                date: date,
                notes: notes,
                noOfPlayers: noOfPlayers,
                status: status,
                playersList: playersList
                //_id: id, //how to get id? 
            };

            const inserteventsInfo = await eventsCollection.insertOne(new_events);
            if (inserteventsInfo.insertedCount === 0) throw "Could not add likes";

            console.log("Succesfully added given likes to mongodb database");
            return inserteventsInfo;
        }
        catch (e) {
            console.log(e);
        }
    },

    async removePlayerFromEvent(userEmail, sessionID) {
        // const eventCollection = await eventsData();
        // console.log("REMOVE FUN")
        //const userEvent = await eventCollection.find({creatorEmail:userEmail}).toArray();
        //  console.log(userEmail);
        const eventCollection = await eventsData();
        const userEvent = await eventCollection.find({ creatorEmail: sessionID }).toArray();

        console.log("jkl" + userEvent.length)

        for (let i = 0; i < userEvent.length; i++) {
            let players = [];
            players = userEvent[i].playersList;
            let Found = false;
            console.log(players.length);
            players.forEach(element => {
                console.log("in")
                if (element.email === userEmail) {
                    Found = true;
                }

            });

            if (Found === true) {
                console.log("remove true" + userEvent[i]._id)
                await eventCollection.updateOne({ _id: ObjectId(userEvent[i]._id) }, { $pull: { "playersList": { email: userEmail } } });
                console.log("remoc")
            }
        }


    },

    async getMyEvents(userEmail) {
        const eventCollection = await eventsData();
        const userEvent = await eventCollection.find({ creatorEmail: userEmail }).toArray();

        let result = []
        for (let i = 0; i < userEvent.length; i++) {
            //console.log("there")
            let userInfo = {
                "_id": "",
                "sport": "",
                "date": "",
                "time": "",
                "location": "",
                "groundName": "",
                "address": "",
                "playersList": ""
            }

            let data = userEvent[i];

            if (data.status === "approved") {
                console.log("in approved")
                userInfo._id = data._id;
                userInfo.sport = data.sports;
                userInfo.date = data.date;
                userInfo.location = data.location;
                userInfo.playersList = data.playersList;
                result.push(userInfo);
            }

        }

        return result;


    },


    //All events whixh I can join
    async getAllApprovedEvent(emailId) {


        let eventCollection = await eventsData();
        let res = await eventCollection.find({}).toArray();
        let result = [];
        // let eventInfo = {
        //     "_id":"",
        //     "sport":"",
        //     "creator":"",
        //     "date":"",
        //     "time":"",
        //     "location":"",
        //     "groundName":"",
        //     "address":""
        // }
        let j = 0;
        for (let i = 0; i < res.length; i++) {
            event = res[i];
            let playerName = event.playersList;
            var Found = false;
            if (playerName !== undefined) {
                playerName.forEach(element => {
                    if (element.email === emailId) {
                        Found = true;
                    }

                });
            }
            // var Found = Array.filter(obj=>obj.email==='email');
            console.log(Found);
            if (event.status == "approved" && event.noOfPlayers > 0 && Found == false && event.creatorEmail !== emailId) {
                let eventInfo = {
                    "_id": "",
                    "sport": "",
                    "creator": "",
                    "date": "",
                    "time": "",
                    "location": "",
                    "groundName": "",
                    "address": ""
                }
                eventInfo._id = event._id;
                eventInfo.sport = event.sports;
                eventInfo.creator = event.creatorEmail;
                eventInfo.date = event.date;
                let mapsCollection = await mapsData()
                let mapInfo = await mapsCollection.findOne({ eventsId: event._id });
                eventInfo.time = mapInfo.time;
                eventInfo.location = event.location;
                eventInfo.groundName = mapInfo.name;
                eventInfo.address = mapInfo.address;

                result.push(eventInfo);
                console.log("event " + result[j].date)
                //j++;
                console.log(j)
            }
        }
        console.log("ggg" + result);

        for (let i = 0; i < result.length; i++) {
            console.log("H " + result[i].date);
        }

        return result;
    },

    //KAnnu functions


    async addPlayersToEvent(eventId, userEmail) {
        const newPlayer = {
            email: userEmail,
            cid: eventId,
            status: 'Request sent'
        }

        const arr = [];

        console.log("in add")
        const eventCollection = await eventsData();
        // const userEvent = await eventCollection.findOne({ _id: ObjectId(eventId) });
        //let players = userEvent.playersList;
        // players.push(players);
        // userEvent.players = players

        await eventCollection.updateOne({ _id: ObjectId(eventId) }, { $addToSet: { playersList: newPlayer } });

        //return arr;
    },

    async getEventsByUserEmail(email) {
        var user = require('../data/users');
        const userInfo = await user.getUserByEmailId(email);
        const eventCollection = await eventsData();
        const userEvents = await eventCollection.find({ createdBy: userInfo._id }).toArray();
        return await userEvents;
    }

}