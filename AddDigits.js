/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    return 1 + (num - 1) % 9;
 };

 /**
  * First check if the number is less than 10.
  * If it is, then we return the number.
  * If the number is greater than or equal to 10, then we calculate the sum of the digits.
  * 
  */