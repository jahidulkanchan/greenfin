import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, default: 'customer' },
    profileImage: { type: String, default: '' },
    resetPassword: { type: String, default: null },
    provider: { type: String, default: null },
    providerId: { type: String, default: null },
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
