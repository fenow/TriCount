var assert = require("assert");

const TriCount = require("../src/Domain/Geometry/TriCount");
const TriCountEnum = require("../src/Domain/Geometry/TriCountEnum");

describe("TriCount", function() {

  // Method 1
  describe("TriCount.count()", function() {
    const tricount = new TriCount();
    it("Result for range 1,2 will be 3", function() {
      assert.equal(3, tricount.count(1, 2));
    });

    it("Result for range 9,10 will be 4", function() {
      assert.equal(4, tricount.count(9, 10));
    });

    it("Result for too max results will be -1", function() {
      assert.equal(-1, tricount.count(1, 1000000));
    });

    it("Result for range 19,1000 must be 83540657", function() {
      assert.equal(83540657, tricount.count(19, 1000));
    });

    it("Catch exception maxLength value is smaller than minLength value", function() {
      try {
        tricount.count(3, 2);
        assert.ok(false);
      } catch (error) {
        assert.equal(error, 'RangeError: maxLength value is smaller than minLength value');
      }
    });

    it("Catch exception minLength is between ...", function() {
      try {
        tricount.count(0, 2);
        assert.ok(false);
      } catch (error) {
        assert.equal(error, 'RangeError: minLength is between ' + TriCountEnum.MIN_RANGE + ' and ' + TriCountEnum.MAX_RANGE + ', inclusive.');
      }
    });

    it("Catch exception maxLength is between ...", function() {

      const a = 1;
      const b = TriCountEnum.MAX_RANGE + 1;

      try {
        tricount.count(a, b);
        assert.ok(false);
      } catch (error) {
        assert.equal(error, 'RangeError: maxLength is between ' + a + ' and '+ TriCountEnum.MAX_RANGE + ', inclusive');
      }
    });

  });

  // Method 2
});