const encryption = require('../../utilities/encryption')
const User = require("../../models/User");

module.exports={
    createUser:(req,res)=>{
        const{email,passwordFront}=req.body
        let salt = encryption.generateSalt()
        let password = encryption.generateHashedPassword(salt, passwordFront)

    User.create({
      email,
      username: 'User',
      salt: salt,
      password: password,
      roles: ['User']
    })
    .then((user)=>{
      res.status(200).json({
        success:true,
        message:"User was created"
    })
    })
    .catch((err)=>{
      console.log(`This is an error from creating a user in db: ${err}`)
    })
    }
}