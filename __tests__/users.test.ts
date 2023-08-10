import chai from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import { expect } from 'chai'
import app from '../src/index'
import path from 'path'
import fs from 'fs'

chai.use(chaiHttp)

describe('Search term in csv file', () => {
  const filePath = path.resolve(__dirname, '..', 'src', 'data', 'uploads', 'file.mock.csv')

  after(async () => {
    await fs.promises.unlink(filePath);
  });
  
  afterEach(() => {
    sinon.restore();
  });

  it('should find the term if exists in the file ', async () => {
    await fs.promises.writeFile(filePath, 'Mock CSV Content');
    await chai
      .request(app)
      .post('/api/files')
      .attach('file', filePath)

    const res = await chai
      .request(app)
      .get('/api/users?q=ock')

    expect(res).to.have.status(200)
    expect(res.body).to.be.an('object')
    expect(res.body.response).to.be.deep.equal([
      'Mock CSV Content'
    ])
  })

})
