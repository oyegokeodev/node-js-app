const app = require('../src/app');

describe('GET /', () => {
  it('should return hello message', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/'
    });
    
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toHaveProperty('message');
  });
});
