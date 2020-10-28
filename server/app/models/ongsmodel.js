import mongoose, {Schema} from 'mongoose';

Schema = mongoose.Schema;

const Ongsmodel = new Schema({
    name: String,
    description: String,
    image: String,
    cause: String
});

export default mongoose.model('Ongs', Ongsmodel);