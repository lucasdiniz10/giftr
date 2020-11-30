import Ongs from '../models/ongsmodel'

class Ongscontroller {
    async get(req, res){
        Ongs.find()
        .then((doc)=>{
            return res.json({Ongs: doc});
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    async getId(req, res){
        const {id} = req.params;
        
        Ongs.find({_id: id})
        .then((doc)=>{
            return res.json({Ongs: doc});
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    async getCause(req, res){
        const {causeName} = req.params;
        
        Ongs.find({cause: causeName})
        .then((doc)=>{
            return res.json({Ongs: doc});
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    async post(req, res){

        const { name } = req.body;
        const { description } = req.body;
        const { image } = req.body;
        const { cause } = req.body;
        const { link } = req.body;
        
        await Ongs.create({
            name: name,
            description: description,
            image: image,
            cause: cause,
            link: link
        })
        return res.json();
    }
}

export default new Ongscontroller();