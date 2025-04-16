const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  reminderDate: { type: Date, required: true },
  note: { type: String, required: true }
});

module.exports = mongoose.model('Reminder', reminderSchema);
