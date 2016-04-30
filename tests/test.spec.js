var chai = require('chai')
var fizzbuzz = require('../server.js')
var should = chai.should()

describe('fizzbuzz', function () {
  it('should return 1', function () {
    fizzbuzz(1).should.equal(1)
  })
})
