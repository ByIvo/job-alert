const sinon = require('sinon');
const nodemailer = require('nodemailer');

let stub;

const JobAlert = require('../src/job-alert');

afterEach(() => {
  stub.restore();
});

describe('Job alert module', () => {
  test('Should query the right endpoint', async () => {
    stub = sinon.stub(nodemailer, 'createTransport');
  });
});