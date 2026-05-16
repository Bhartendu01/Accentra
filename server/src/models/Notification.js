import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  body: String,
  read: { type: Boolean, default: false },
  type: { type: String, default: 'learning' }
}, { timestamps: true });

export default mongoose.model('Notification', notificationSchema);
