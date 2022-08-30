
const bcrypt = require("bcryptjs");
const chats = [];

module.exports = {
  createMessage: (req, res) => {
    // get the body,destructure it
    console.log(req.body);
    const { password, username } = req.body;
    //looping/iterating over chats to find an existing pin that corresponds to a pinHash
    for (let i = 0; i < chats.length; i++) {
      const existing = bcrypt.compareSync(pin, chats[i].pinHash);
      //pin match succeeded then store message in the same array
      if (existing) {
        //push message to existing messages array
        chats[i].messages.push(message);
        //copying the object because we do not want to send the pinHash/pin to the front-end
        const messagesToReturn = { ...chats[i] };
        delete messagesToReturn.pinHash;
        res.status(200).send(messagesToReturn);
        return;
      }
    }
    
    //if no pin exists create hash and store message in an array as a new element
    //convert pin to hash
    const salt = bcrypt.genSaltSync(5);
    const pinHash = bcrypt.hashSync(pin, salt);

    //created new element/object to push to chats array
    let msgObj = {
      pinHash,
      messages: [message],
    };
    chats.push(msgObj);
    const messagesToReturn = { ...msgObj };
    delete messagesToReturn.pinHash;
    //return the message/messages
    res.status(200).send(messagesToReturn);
  },
};








// const bcrypt = require('bcryptjs')
// const users = []

// module.exports = {
//     login: (req, res) => {
//       const { username, password } = req.body
      
//       for (let i = 0; i < users.length; i++) {
//         if (users[i].username === username) {
//           const authenticated = bcrypt.compareSync(password, users[i].passwordHash)
//           if (authenticated) {
//             let userToReturn = {...users[i]}
//             delete userToReturn.passwordHash
//             res.status(200).send(userToReturn)
//           }
//         }
//       }
//       res.status(400).send("User not found.")
//     },
//     register: (req, res) => {
//         const { username, email, firstName, lastName, password } = req.body
//         const salt = bcrypt.genSaltSync(5)
//         const passwordHash = bcrypt.hashSync(password, salt)
//         let user = {
//           username,
//           email,
//           firstName,
//           lastName,
//           passwordHash
//         }
//         users.push(user)
//         let userToReturn = {...user}
//         delete userToReturn.passwordHash
//         res.status(200).send(userToReturn)
//     }
// }


