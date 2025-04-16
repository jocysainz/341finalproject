const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');
const isAuthenticated = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api/reminders:
 *   get:
 *     summary: Get all reminders
 *     responses:
 *       200:
 *         description: List of reminders
 *       401:
 *         description: Not logged in
 */
router.get('/', isAuthenticated, reminderController.getAllReminders);

/**
 * @swagger
 * /api/reminders/{id}:
 *   get:
 *     summary: Get a reminder by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Reminder ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reminder found
 *       401:
 *         description: Not logged in
 *       404:
 *         description: Reminder not found
 */
router.get('/:id', isAuthenticated, reminderController.getReminderById);

/**
 * @swagger
 * /api/reminders:
 *   post:
 *     summary: Create a new reminder
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - taskId
 *               - reminderDate
 *               - note
 *             properties:
 *               taskId:
 *                 type: string
 *               reminderDate:
 *                 type: string
 *                 format: date
 *               note:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reminder created
 *       400:
 *         description: Missing or invalid fields
 *       401:
 *         description: Not logged in
 */
router.post('/', isAuthenticated, reminderController.createReminder);

/**
 * @swagger
 * /api/reminders/{id}:
 *   put:
 *     summary: Update a reminder
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Reminder ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reminderDate:
 *                 type: string
 *                 format: date
 *               note:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reminder updated
 *       401:
 *         description: Not logged in
 *       404:
 *         description: Reminder not found
 */
router.put('/:id', isAuthenticated, reminderController.updateReminder);

/**
 * @swagger
 * /api/reminders/{id}:
 *   delete:
 *     summary: Delete a reminder
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Reminder ID
 *     responses:
 *       200:
 *         description: Reminder deleted
 *       401:
 *         description: Not logged in
 *       404:
 *         description: Reminder not found
 */
router.delete('/:id', isAuthenticated, reminderController.deleteReminder);

module.exports = router;
