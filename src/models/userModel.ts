import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'user' },
    readList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'readlistModel',
      },
    ],
    readlistModel: [
      {
        type: String,
        required: true,
        enum: ['Manga', 'Book'],
      },
    ],
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
