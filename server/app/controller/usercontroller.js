import User from '../models/usermodel';
import bcrypt from 'bcryptjs';

class UserController {

    async get(req, res) {
        User.find()
            .then((doc) => {
                return res.json({ User: doc });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async getId(req, res) {
        const { id } = req.params;

        User.find({ _id: id })
            .then((doc) => {
                return res.json({ User: doc });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    async post(req, res) {
        const { name } = req.body;
        const { email } = req.body;
        const { password } = req.body

        const checkEmail = await User.findOne({ email: email })

        if (!checkEmail) {
            await User.create({
                name: name,
                email: email,
                password: password
            })
            return res.json();
        }

        return res.status(401).json({ error: 'User already exists' });

    }

    async put(req, res) {
        const { email } = req.params;

        const { name, password } = req.body;

        const doc = await User.findOne({ email: email })

        if (name) {
            doc.name = name;
        } if (email) {
            doc.email = email;
            console.log('asdasdasd')
        } if (password) {
            console.log(doc.password)
            doc.password = password

        }

        await doc.save()


        return res.json(doc);
    }

    async delete(req, res) {
        const { id } = req.params;
    
        User.findByIdAndRemove({_id: id}, { useFindAndModify: false }).then((doc)=>{
            return res.json({message: 'Deletado'});
        })
        .catch((err)=>{
            return res.json({message: 'not found'});
        });
    }

}

export default new UserController();