const User = require('../models/User')

const userController = {

    createUser: async(req,res) => {
        try {
            await new User(req.body).save()

            res.status(201).json({
                message: 'User created',
                success: true
            })
        }catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    getUsers: async(req, res) => {
        let user = await User.find()
            try{
                if (user.length > 0) {
                    res.status(200).json({
                        message: "you get all the users",
                        response: user,
                        success: true
                    })
                } else {
                    res.status(404).json({
                        message: "could't find all the users",
                        success: false
                    })
                }
            }catch(error) {
                console.log(error)
            }
        },

    deleteUser: async(req, res) => {
            const {id} = req.params
            try {
                let deleted = await User.findByIdAndDelete({_id:id})
                if (deleted) {
                res.status(200).json({
                    message: "User deleted successfully",
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "User deleted failed",
                    success: false
                })
            }
        }catch(error) {
            console.log(error)
        }
        }, 

}