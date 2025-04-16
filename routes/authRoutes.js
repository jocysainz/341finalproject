const express = require('express');
const passport = require('passport');
const router = express.Router();

/**
 * @swagger
 * /auth/google:
 *   get:
 *     summary: Login with Google
 *     description: Redirects user to Google for OAuth login
 *     responses:
 *       302:
 *         description: Redirect to Google
 */
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Google OAuth callback
 *     description: Handles redirect from Google after login
 *     responses:
 *       302:
 *         description: Redirect to profile or failure page
 */
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => res.redirect('/auth/profile')
);

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Get current user profile
 *     description: Returns info about the logged-in user
 *     responses:
 *       200:
 *         description: User profile
 *       401:
 *         description: Not logged in
 */
router.get('/profile', (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Not logged in' });
  res.json(req.user);
});

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Logout user
 *     description: Logs out the user and ends the session
 *     responses:
 *       200:
 *         description: Logged out successfully
 */
router.get('/logout', (req, res) => {
  req.logout(() => res.json({ message: 'Logged out' }));
});

module.exports = router;
