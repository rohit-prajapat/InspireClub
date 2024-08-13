const UserModel = require('../model/userModel');
const bcryptjs = require('bcryptjs');

const register = async (req, res) => {
    const givenUser = req.body.user;
        console.log("user is here",givenUser);
       
    try {
        const {name,email,password} = req.body.user;
        console.log(givenUser,email,password)
        if (!givenUser || !email|| !password) {
            return res.status(400).json({ message: 'Invalid details' });
        }



        // Use findOne to find a single user by email
        const foundUser = await UserModel.findOne({ email: email });

        if (foundUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
       
        let hashpassword = await bcryptjs.hash(password,10);
        const user = new UserModel({
            name,email,password : hashpassword
        });
        console.log("user is madeded")
        const result = await user.save();
    
        if (result) {
            console.log("User registered successfully");
            return res.status(201).json({ message: 'User registered successfully',user});
        }

    } catch (err) {
        console.log("Error in user registration, user details are: ", givenUser);
        res.send(err);
        // return res.status(500).json({ message: 'Something went wrong, please try again' });
        console.log(err);
    }
}

module.exports = register;


const login = async (req, res) => {
    const {name,email,password} = req.body;

    const givenUser = {
        name : name,
        email : email,
        password : password

    };
        console.log("user is here",givenUser);

    try {
        if (!givenUser || !givenUser.email || !givenUser.password) {
            return res.status(400).json({ message: 'Invalid details' });
        }

        // Use findOne to find a single user by email
        const foundUser = await UserModel.findOne({ email: givenUser.email });

        if (foundUser) {
            const {password} = givenUser;
            const isMatch = await bcryptjs.compare(givenUser.password, foundUser.password);
            if(!isMatch)  return res.status(400).json({ message: 'invalid username password' });
            else{
                const {_id,name,email} = foundUser;
            return res.status(200).json({ message: 'User Login successfully',user:{
                name:name,email :email ,_id :_id, 
            }});
                
            }
        }
        else{
            return res.status(400).json({ message: 'Email not registered' });
        }

    } catch (err) {
        console.log("Error in user registration, user details are: ", givenUser);
        res.send(err);
        // return res.status(500).json({ message: 'Something went wrong, please try again' });
        console.log(err);
    }
}



module.exports =  {register,login};