import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

// Define the model
const Schema = new mongoose.Schema({
    // id
    // title
    // image
    // tag
    // description
})

// Export the model
export default mongoose.model('Book', Schema);