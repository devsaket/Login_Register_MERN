const Mongoose = require('mongoose')

var userSchema = Mongoose.Schema({
    // firstName : { type : String, required:true },
    // lastName : {type : String },
    email : {type : String, required:true, unique:true },
    // userName : {type : String, required:true, unique:true },
    password : {type : String, required:true},
    createdOn: {type: Date, default: Date.now}
})

const UserTable = Mongoose.model('UserTable', userSchema)

module.exports = UserTable