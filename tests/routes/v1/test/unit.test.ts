import supertest from 'supertest'

import app from '../../../../src/loaders/express'

describe('test', () => {
  const endpoint = '/api/v1.0/test'
  const request = supertest(app())

  beforeEach(() => {})

  it('Should send error when empty body is sent', async (done) => {
    const response = await request.post(endpoint)
    expect(response.status).toBe(400)
    done()
  })

  it('Should send error when bad body is sent', async (done) => {
    const response = await request.post(endpoint).send(`{
      "test" "ok"
    }`)
    expect(response.status).toBe(400)
    done()
  })

  it('Should send success response', async (done) => {
    const response = await request.post(endpoint).send({
      test: 1
    })
    expect(response.status).toBe(200)
    done()
  })
})
