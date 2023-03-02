import mongoose from "mongoose";
const {Schema, model} = mongoose;

const kittySchema = new Schema({
    name:String
});

const kitty = model('kitten') || model('kitten',kittySchema);

export default kitty;