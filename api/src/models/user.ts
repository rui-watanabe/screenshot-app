import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
  googleId: String
});
const User = mongoose.model('user', userSchema);

export { User };