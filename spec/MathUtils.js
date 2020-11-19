MathUtils = function () {};
MathUtils.prototype.sum = function(number1, number2) {
    return number1 + number2;
}
MathUtils.prototype.factorial = function (number) {
  if (number < 0) {
    throw new Error('There is no factorial for negative numbers');
  } else if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * this.factorial(number - 1);
  }
};
describe('MathUtils', function () {
  var calc;

  //This will be called before running each spec
  beforeEach(function () {
    calc = new MathUtils();
    spyOn(calc, 'sum');
  });

  describe('when calc is used to peform basic math operations', function () {
    //Spec for factorial operation
    it('should be able to calculate factorial of 9', function () {
      expect(calc.factorial(9)).toEqual(362880);
    });

    //Spec for factorial operation for negative number
    it('should be able to throw error in factorial operation when the number is negative', function () {
      expect(function () {
        calc.factorial(-7);
      }).toThrowError(Error);
    });


    //Test for sum operation
    it('should be able to calculate sum of 3 and 5', function () {
      //call any method
      calc.sum(3, 5);

      //verify it got executed
      expect(calc.sum).toHaveBeenCalled();
      expect(calc.sum).toHaveBeenCalledWith(3, 5);
    });


    
    //Spec for factorial operation for negative number
    it('should be able to throw exception in factorial operation when the number is negative', function () {
        expect(function () {
          calc.factorial(-2);
        }).toThrow();
      });
  });
});
