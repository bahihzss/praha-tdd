const { add, subtract, multiply, divide } = require('./calculator.js');

describe('四則演算', () => {
  describe('add', () => {
    it('引数に渡した数を足し合わせた数を返す', () => {
      expect(add(3, 10)).toBe(13);
      expect(add(-3, 5)).toBe(2);
      expect(add(0, 0, 0)).toBe(0);
    });

    it('結果が 1000 を超える場合は、 "too big" を返す', () => {
      expect(add(900, 100, 20, 10)).toBe('too big');
      expect(add(1000, 0, 1)).toBe('too big');
      expect(add(1001, 1)).toBe('too big');
    });
  });

  describe('subtract', () => {
    it('引数を引いていった結果を返す', () => {
      expect(subtract(10, 3)).toBe(7);
      expect(subtract(5, 3, 1)).toBe(1);
      expect(subtract(0, 0)).toBe(0);
    });

    it('引数が負の数になる場合は、 "negative number" を返す', () => {
      expect(subtract(5, 10)).toBe('negative number');
      expect(subtract(100, 200, 300)).toBe('negative number');
      expect(subtract(100, 100, 1, 1)).toBe('negative number');
    });
  });

  describe('multiply', () => {
    it('引数を掛け合わせた結果を返す', () => {
      expect(multiply(3, 10, 3)).toBe(90);
      expect(multiply(2, 2, 2, 2, 2, 2, 2)).toBe(128);
      expect(multiply(0, 1, 100, 1000)).toBe(0);
    });

    it('結果が 1000 を超える場合は "big big number" を返す', () => {
      expect(multiply(50, 201)).toBe('big big number');
      expect(multiply(40, 30, 10)).toBe('big big number');
      expect(multiply(200, 6, 10)).toBe('big big number');
    });
  });

  describe('divide', () => {
    it('引数を左から右に割っていった結果を返す', () => {
      expect(divide(100, 10, 2)).toBe(5);
      expect(divide(0, 10)).toBe(0);
      expect(divide(-100, 10)).toBe(-10);
    });

    it('小数点以下は切り捨てられる', () => {
      expect(divide(12, 5)).toBe(2);
      expect(divide(23, 4)).toBe(5);
    });

    it('0 で割ると、エラーになる', () => {
      expect(() => divide(100, 0)).toThrow('Divide by zero');
    });
  });
});