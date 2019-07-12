# Triangles Count Test [![Build Status](https://travis-ci.org/fenow/TriangleCount.svg?branch=master)](https://travis-ci.org/fenow/TriangleCount)


We are interested in triangles that have integer length sides, all of which are between minLength and maxLength, inclusive.

How many such triangles are there? Two triangles differ if they have a different collection of side lengths, ignoring order.
Triangles with side lengths {2,3,4} and {4,3,5} differ, but {2,3,4} and {4,2,3} donot. 

We are only interested in proper triangles; the sum of the two smallest sides of a proper triangle must be strictly greater than the length of the biggest side.

Create a class TriCount that contains a method count that is given ints minLength and maxLength and returns the number of different proper triangles whose sides all have lengths between minLength and maxLength inclusive. If there are more than 1,000,000,000 return -1.  

**Constraints**

* minLength is between 1 and 1,000,000, inclusive.
* maxLength is between minLength and 1,000,000, inclusive. 



**Install**

```
yarn install
```

**Run Unit Test**

Command:
```
yarn test
```
