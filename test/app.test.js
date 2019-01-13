process.env.NODE_ENV = 'test'

var {app} = require('../app');
var request = require('supertest');
var expect = require('expect');

describe('Public Routes Test', () => {
  it('should GET / and return 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done)
  })

  it('should GET /about and return 200', (done) => {
    request(app)
      .get('/about')
      .expect(200)
      .end(done)
  })

  it('should GET /projects and return 200', (done) => {
      request(app)
        .get('/projects')
        .expect(200)
        .end(done)
  })
})