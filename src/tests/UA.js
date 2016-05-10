'use strict'

const chai = require('chai');
const expect = chai.expect; // we are using the "expect" style of Chai
const UA = require('../lib/UA.js');

describe('class UA - Constructor', function() {
  it('Should throw an error if no uid parameter is added', function() {
    let error = false;

    try {
      const ua = new UA();
    } catch(err) {
      error = err.message;
    }

    expect(error).to.equal('<cli-analytics> UA missing required uid parameter');
  });
});

describe('class UA - Constructor', function() {
  it('Should return valid UA class if uid exists ', function() {
    const ua = new UA('00000000');
    expect(ua).to.be.an.instanceof(UA);
  });
});

describe('class UA - Constructor', function() {
  it('Should include userUUID if a valid userUUID parameter exists', function() {
    const ua = new UA('00000000', {'cid': '7aee0e05-24c7-4a1e-9d85-2c6581a70078'});
    expect(ua.track.cid).to.equal('7aee0e05-24c7-4a1e-9d85-2c6581a70078');
  });
});
