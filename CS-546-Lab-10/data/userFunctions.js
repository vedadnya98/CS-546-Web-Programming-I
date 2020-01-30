const userData = require("./users");
const bcrypt = require('bcrypt');
module.exports = {
        async compareDetails(userid , password)
        {
            let index=0;
            for(var i=0 ; i<userData.length ; i++)
            {
                if(userid.toLowerCase() === userData[i].username.toLowerCase() && bcrypt.compare(password , userData[i].hashedPassword)){
                index = i+1;    
                return index;
                }
            }
            return index;
        },
        async findUserbyId(userid){
            for(var i=0 ; i<userData.length ; i++)
            {
                if(userid === userData[i]._id)
                    return userData[i];
            }
        }
}