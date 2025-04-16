const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: A list of tasks
 */
router.get('/', taskController.getAllTasks);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - category
 *             properties:
 *               title:
 *                 type: string
 *                 example: Finish API Project
 *               description:
 *                 type: string
 *                 example: Complete Part 1 of the final project
 *               dueDate:
 *                 type: string
 *                 format: date
 *                 example: 2025-04-19
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high]
 *                 example: high
 *               status:
 *                 type: string
 *                 enum: [pending, completed]
 *                 example: pending
 *               category:
 *                 type: string
 *                 description: ID of the category
 *                 example: 661ef15e41dcd59e2fa4e5f2
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', taskController.createTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high]
 *               status:
 *                 type: string
 *                 enum: [pending, completed]
 *               category:
 *                 type: string
 *                 description: ID of the category
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       404:
 *         description: Task not found
 */
router.put('/:id', taskController.updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */
router.delete('/:id', taskController.deleteTask);

module.exports = router;
