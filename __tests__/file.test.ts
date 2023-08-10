import chai from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import { expect } from 'chai'
import app from '../src/index'
import path from 'path'
import fs from 'fs'

chai.use(chaiHttp)

describe('File Upload Endpoint', () => {
  const filePath = path.resolve(__dirname, '..', 'src', 'data', 'uploads', 'file.mock.csv')

  after(async () => {
    await fs.promises.unlink(filePath);
  });
  
  afterEach(() => {
    sinon.restore();
  });

  it('should upload a CSV file', async () => {
    await fs.promises.writeFile(filePath, 'Mock CSV Content');
    const res = await chai
      .request(app)
      .post('/api/files')
      .attach('file', filePath)

    expect(res).to.have.status(200)
    expect(res.body).have.property('response')
    expect(res.body.response).to.equal('File file.mock.csv uploaded successfully.')
  })
  it('should thow a Error if try to access without send a file', async () => {
    const res = await chai
      .request(app)
      .post('/api/files')

      expect(res).to.have.status(404)
      expect(res.body).have.property('message')
  })
})
