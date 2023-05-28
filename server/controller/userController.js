var UserTable = require('../models/usermodel')

exports.create = (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"})
        return
    }

    // new user
    const users = new UserTable({
        // firstName: req.body.firstName,
        // lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        createdOn: req.body.createdOn,
        status: req.body.status
    })

    //save user in the database
    users.save(users)
    .then(
        data =>{
            res.send(data)
        }
    ).catch(err => {
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        })
    })
}

// retrieve and return all users/ retrieve and return a single user
exports.find = (req,res) =>{
    if(req.query.email){
        const emailid = req.query.email

        UserTable.find({email: emailid})
        .then(data=>{
            if(!data){
                res.status(404).send({message: "Not found user with email"+id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error retrieving user with id" + id})
        })
        
    }else{
        UserTable.find()
        .then(user=>{res.send(user)})
        .catch(err=>{res.status(500).send({message: err.message || "Error Occurred while retrieving user information"})})
    }
}
