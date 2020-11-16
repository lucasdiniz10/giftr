import User from '../models/usermodel'
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth'
import bcrypt from 'bcryptjs';

class SessionController {
    async Session(req, res){
        const {email, password} = req.body
        
        const user = await User.findOne({email: email})

        if(!user) {
            return res.status(401).json({error: 'User not foud!'});
        }
        
        const testPassword = await bcrypt.compare(password, user.password)
        
        if(!testPassword){
            return res.status(401).json({error: 'Password not match!'});
        }

        const { name, _id } = user

        return res.json({
            user: {
                _id,
                name,
                email
            },
            token: jwt.sign({ _id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        })
    }
}

export default new SessionController();