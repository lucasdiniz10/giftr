import User from '../models/usermodel';

class UserController {

    async get(req, res){
        User.find()
        .then((doc)=>{
            return res.json({User: doc});
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    async post(req, res){
        const { name } = req.body;
        const { email } = req.body;
        const { password } = req.body
        
        const user = await User.create({
            name: name,
            email: email,
            password: password
        })
        return res.json();
    }

}

export default new UserController();