const request = require('supertest');
const app = require('../app');

describe('GET /auth/profile', () => {
  it('should return 401 if not logged in', async () => {
    const res = await request(app).get('/auth/profile');
    expect(res.statusCode).toBe(401);
  });
});
