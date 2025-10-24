const { describe, it } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return hello message', async () => {
    const response = await request(app).get('/');
    
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.message, 'Hello from Node.js app!');
    assert(response.body.timestamp);
  });
});

describe('GET /health', () => {
  it('should return health status', async () => {
    const response = await request(app).get('/health');
    
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.status, 'OK');
  });
});