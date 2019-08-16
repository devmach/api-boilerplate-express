import request from 'supertest';

import app from './app';

describe('GET /404', () => {
  it('should return 404', async () => {
    const response = await request(app).get('/404');
    expect(response.statusCode).toBe(404);
  });
});
