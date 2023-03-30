const userModel = require('../models/userModel.js')

const loginUser = async(req, res)=>{
    const{username, password} = req.body;

    if(!username || !password){
        return res.json({message: "*Fill all the fields"})
    }


    try {
        const user = await userModel.findOne({username: username})

        if(user){
            if(password != user.password){
                return res.status(400).json("*Wrong password")
            }

        const token = jwt.sign({username: user.username, id: user._id}, "thisisasecretkey");


            return res.status(200).json({user, token})
        }

        return res.status(404).json("*User does not exist")

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
        
    }
}

module.exports = loginUser