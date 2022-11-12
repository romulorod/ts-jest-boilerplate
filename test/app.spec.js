const request = require('supertest');

const app = require('../src/app');

test('Should respond on root endpoint', async () => {
  return request(app).get('/').then(res => {
    expect(res.status).toBe(200);
  })
})
