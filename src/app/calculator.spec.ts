import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: any;
  //Arrange
  beforeEach(()=>{
    calculator = new Calculator();
  });

  describe('Test for multiplicar', () => {
    it('should return nine',()=>{
      //Arrange
      // let calculator = new Calculator();
      //Act
      let result = calculator.multiply(3,3);
      //Assert
      expect(result).toEqual(9);
    });

    it('should return four',()=>{
      //Arrange
      // let calculator = new Calculator();
      //Act
      let result = calculator.multiply(2,2);
      //Assert
      expect(result).toEqual(4);
    });
    
  });

  describe('Test for divide', () => {
    it('divice for a number',()=>{
      //Arrange
      // let calculator = new Calculator();
      //Act && Assert
      expect(calculator.divide(6,3)).toEqual(2);
      expect(calculator.divide(5,2)).toEqual(2.5);
    });

    it('divice for a zero',()=>{
      //Arrange
      // let calculator = new Calculator();
      //Act && Assert
      expect(calculator.divide(6,0)).toEqual(null);
      expect(calculator.divide(20,0)).toBeNull();
    });

    it('test of matchers',()=>{
      //Arrange
      let name = 'David';
      let name2;
      expect(name).toBeDefined();
      expect(name2).toBeUndefined();

      expect(1+2 == 3).toBeTruthy();
      expect(1+1 == 3).toBeFalsy();

      expect(5).toBeLessThan(10);//cinco es menor que 10
      expect(20).toBeGreaterThan(10); //20 es mayor que 10
      
      expect('1234567').toMatch(/123/);//si tiene un valor 123
      expect(["apples","oranges", "pears"]).toContain("oranges");

    });
    
    
  });
});
