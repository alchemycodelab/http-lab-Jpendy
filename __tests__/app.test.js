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

  it('handles the /blue route', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });

  it('handles the /green route', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });

  it('handles the /echo route', () => {
    return request(app)
      .post('/echo')
      .send('hello')
      .then(res => {
        expect(res.text).toEqual('hello');
      });
  });

  it('handles wrong path', () => {
    return request(app)
      .get('/wrong')
      .then(res => {
        expect(res.text).toEqual('Not Found');
      });
  });

  it('handles wrong method (.trace)', () => {
    return request(app)
      .trace('/red')
      .then(res => {
        expect(res.text).toEqual('Not Found');
      });
  });

});
