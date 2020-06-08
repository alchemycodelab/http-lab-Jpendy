const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
    
  it('handles the / route', () => {

    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it('handles the /red route', () => {

    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });

});
