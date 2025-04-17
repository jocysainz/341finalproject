const request = require('supertest');
const app = require('../app');

describe('GET /api/reminders', () => {
  it('should return 401 if not logged in', async () => {
    const res = await request(app).get('/api/reminders');
    expect(res.statusCode).toBe(401);
  });
});
