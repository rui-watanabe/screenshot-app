import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
  googleId: String
});
const User = mongoose.model('User', userSchema);

export { User };