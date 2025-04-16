const Reminder = require('../models/Reminder');

exports.getAllReminders = async (req, res) => {
  const reminders = await Reminder.find({ userId: req.user._id }).populate('taskId');
  res.json(reminders);
};

exports.getReminderById = async (req, res) => {
  const reminder = await Reminder.findOne({ _id: req.params.id, userId: req.user._id });
  if (!reminder) return res.status(404).json({ message: 'Reminder not found' });
  res.json(reminder);
};

exports.createReminder = async (req, res) => {
  const { taskId, reminderDate, note } = req.body;
  if (!taskId || !reminderDate || !note) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const newReminder = await Reminder.create({ taskId, reminderDate, note, userId: req.user._id });
  res.status(201).json(newReminder);
};

exports.updateReminder = async (req, res) => {
  const updated = await Reminder.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  );
  if (!updated) return res.status(404).json({ message: 'Reminder not found' });
  res.json(updated);
};

exports.deleteReminder = async (req, res) => {
  const deleted = await Reminder.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
  if (!deleted) return res.status(404).json({ message: 'Reminder not found' });
  res.json({ message: 'Reminder deleted' });
};
