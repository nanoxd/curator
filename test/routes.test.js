import request from 'supertest'
import app from '../src/app'

describe('GET /', () => {
  it('should contain a message', () => {
    request(app)
      .get('/')
      .expect(200)
      .then(res => {
        expect(res.body.message).toBe('👋')
      })
  })
})
