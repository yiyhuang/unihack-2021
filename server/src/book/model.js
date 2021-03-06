import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

// Define the model
const Schema = new mongoose.Schema({
    book:{
        title: String,
        catogory: String,
        discription: String,
    },

    // image
    // tag
})

// Export the model
export default mongoose.model('Book', Schema);