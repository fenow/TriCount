const TriCountEnum = require("./TriCountEnum");

class TriCount {
    /**
     * We are interested in triangles that have integer length sides, all of which are between minLength and maxLength, inclusive.
     * How many such triangles are there? Two triangles differ if they have a different collection of side lengths, ignoring order.
     * Triangles with side lengths {2,3,4} and {4,3,5} differ, but {2,3,4} and {4,2,3} donot.
     * We are only interested in proper triangles;
     * the sum of the two smallest sides of a proper triangle must be strictly greater than the length of the biggest side.
     * Create a class TriCount that contains a method count that is given ints minLength and maxLength
     * and returns the number of different proper triangles whose sides all have lengths between minLength and maxLength inclusive.
     * If there are more than 1,000,000,000 return -­1.
     * 
     * 
     * @param int minLength
     * @param int maxLength
     * @return int triangles or -1: too many triangles (more than 1000000000)
    */
    count(minLength, maxLength){
      this.minLength = minLength;
      this.maxLength = maxLength;
      let output = 0;

      // thrown an error if perimeter is out of range
      this.checkPerimeter();

      // We are in tridimensionnal case, so we have to loop 3 times
      // One for calculating the first edge of the triangle
      // Two for calculating the second edge of the triangle
      // Three for calculating the third edge of the triangle
      for (let firstEdge = this.minLength; firstEdge <= this.maxLength; firstEdge++){
        for (let secondEdge = firstEdge; secondEdge <= this.maxLength; secondEdge++){
          for (let thirdEdge = secondEdge; thirdEdge <= this.maxLength; thirdEdge++){
            // We have a constraint : for a real triangle, we need 2 first edge sum must be greater than the last
            if( (firstEdge + secondEdge ) > thirdEdge ) {
              // We have a constraint, if the number of triangles are greater than MAX_TRIANGLE we have to return ERROR_VALUE
              if(output++ > TriCountEnum.MAX_TRIANGLE) {
                return TriCountEnum.ERROR_VALUE;
              }
            }
            // If the constraint is not respected we have to break the loop because the resting loop will be always false
            else{
              break;
            }
          }
        }
      }
        
      return output;
    }


  /***
   * Check minLength and maxLength set
   * Constraints :
   *  minLength is between 1 and 1,000,000, inclusive.
   *  maxLength is between minLength and 1,000,000, inclusive.
   */
  checkPerimeter() {
      if(this.minLength < TriCountEnum.MIN_RANGE || this.minLength > TriCountEnum.MAX_RANGE) {
        throw new RangeError('minLength is between ' + TriCountEnum.MIN_RANGE + ' and ' + TriCountEnum.MAX_RANGE + ', inclusive.');
      } else if(this.minLength > this.maxLength){
        throw new RangeError('maxLength value is smaller than minLength value');
      } else if(this.maxLength > TriCountEnum.MAX_RANGE) {
        throw new RangeError('maxLength is between ' + this.minLength + ' and '+ TriCountEnum.MAX_RANGE + ', inclusive');
      }
    }

  }
  
  module.exports = TriCount;