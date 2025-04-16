const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');
const { ensureAuth } = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api/reminders:
 *   get:
 *     summary: Get all reminders
 *     responses:
 *       200:
 *         description: List of reminders
 *         content:
 *           application/json:
 *             example:
 *               - _id: "66201a1dfbbf28771dc12345"
 *                 note: "Doctor appointment"
 *                 reminderDate: "2025-04-18T10:00:00.000Z"
 *                 user: "661fc5a0ab12345678abc123"
 *       401:
 *         description: Unauthorized
 */
router.get('/', ensureAuth, reminderController.getAllReminders);

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
 *               - note
 *               - reminderDate
 *             properties:
 *               note:
 *                 type: string
 *                 example: "Finish final project"
 *               reminderDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-04-19T15:00:00.000Z"
 *     responses:
 *       201:
 *         description: Reminder created
 *         content:
 *           application/json:
 *             example:
 *               _id: "66201a2afbbf28771dc67890"
 *               note: "Finish final project"
 *               reminderDate: "2025-04-19T15:00:00.000Z"
 *               user: "661fc5a0ab12345678abc123"
 *       400:
 *         description: Bad Request
 */
router.post('/', ensureAuth, reminderController.createReminder);

/**
 * @swagger
 * /api/reminders/{id}:
 *   get:
 *     summary: Get a reminder by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A reminder object
 *         content:
 *           application/json:
 *             example:
 *               _id: "66201a2afbbf28771dc67890"
 *               note: "Finish final project"
 *               reminderDate: "2025-04-19T15:00:00.000Z"
 *               user: "661fc5a0ab12345678abc123"
 *       404:
 *         description: Reminder not found
 */
router.get('/:id', ensureAuth, reminderController.getReminderById);

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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               note:
 *                 type: string
 *               reminderDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Reminder updated
 *       404:
 *         description: Reminder not found
 */
router.put('/:id', ensureAuth, reminderController.updateReminder);

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
 *     responses:
 *       200:
 *         description: Reminder deleted
 *       404:
 *         description: Reminder not found
 */
router.delete('/:id', ensureAuth, reminderController.deleteReminder);

module.exports = router;
