const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     responses:
 *       200:
 *         description: A list of categories
 */
router.get('/', categoryController.getAllCategories);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Create a new category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Work
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', categoryController.createCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *   put:
 *     summary: Update a category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The category ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Personal
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       404:
 *         description: Category not found
 */
router.put('/:id', categoryController.updateCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The category ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
