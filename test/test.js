/////////////////////
//Require Statement//
/////////////////////
var sanity = require('../index.js')
var assert = require("assert")
//shit
///////////////
//Stress Test//
///////////////
describe('Sanity Stress', function(){
  
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });  
  });
  
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });  
  });
  
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });  
  });
  
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });  
  });
  
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });  
  });
  
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });  
  });
  
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });  
  });
  
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });  
  });
  
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });  
  });
  
});

////////////////
//Sanity Check//
////////////////
describe('Actual Sanity Check', function(){
  
  describe('Sanity 1', function () {
    it('should return 0 when called', function () {
      assert.equal(0, sanity.sanity1());
    }); 
  });
  
  describe('Sanity 2', function () {
    it('Should return "Sanity 2" when called',function () {
      assert.equal("Sanity 2", sanity.sanity2());
    });
  });
  
  describe('Sanity 3', function () {
    it('Should return true', function(){
      assert.equal(true, sanity.sanity3());
    });
  });
  
  describe('Sanity 4', function () {
    it('Should return 0, positive, or negative if a number is pos, neg, or 0',function () {
      assert.equal('0', sanity.sanity4(0));
      assert.equal('positive', sanity.sanity4(1));
      assert.equal('negative', sanity.sanity4(-1));
    });
  });
  
});