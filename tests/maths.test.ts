import { describe, it, expect } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  abs,
  power,
  sqrt,
  max,
  min,
  sum,
  average
} from '../src/maths';

describe('Maths Functions', (): void => {
  describe('Basic Operations', (): void => {
    it('should add two numbers correctly', (): void => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });

    it('should subtract two numbers correctly', (): void => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(-1, -1)).toBe(0);
    });

    it('should multiply two numbers correctly', (): void => {
      expect(multiply(4, 5)).toBe(20);
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(0, 100)).toBe(0);
    });

    it('should handle division correctly', (): void => {
      const result1 = divide(10, 2);
      expect(result1.success).toBe(true);
      expect(result1.quotient).toBe(5);

      const result2 = divide(10, 3);
      expect(result2.success).toBe(true);
      expect(result2.remainder).toBe(1);
    });

    it('should handle division by zero', (): void => {
      const result = divide(5, 0);
      expect(result.success).toBe(false);
      expect(result.error).toBe('Division by zero is not allowed');
    });
  });

  describe('Absolute Value', (): void => {
    it('should return absolute value correctly', (): void => {
      expect(abs(-5)).toBe(5);
      expect(abs(5)).toBe(5);
      expect(abs(0)).toBe(0);
    });
  });

  describe('Power', (): void => {
    it('should calculate power correctly', (): void => {
      expect(power(2, 3)).toBe(8);
      expect(power(5, 0)).toBe(1);
      expect(power(10, 2)).toBe(100);
    });
  });

  describe('Square Root', (): void => {
    it('should calculate square root correctly', (): void => {
      const result1 = sqrt(16);
      expect(result1.success).toBe(true);
      expect(result1.value).toBe(4);

      const result2 = sqrt(2);
      expect(result2.success).toBe(true);
      expect(result2.value).toBeCloseTo(1.414, 2);
    });

    it('should handle negative numbers', (): void => {
      const result = sqrt(-1);
      expect(result.success).toBe(false);
      expect(result.error).toBe('Cannot calculate square root of negative number');
    });
  });

  describe('Array Operations', (): void => {
    it('should find maximum value', (): void => {
      const result1 = max(1, 5, 3, 9, 2);
      expect(result1.success).toBe(true);
      expect(result1.value).toBe(9);

      const result2 = max(-5, -1, -10);
      expect(result2.success).toBe(true);
      expect(result2.value).toBe(-1);
    });

    it('should find minimum value', (): void => {
      const result1 = min(1, 5, 3, 9, 2);
      expect(result1.success).toBe(true);
      expect(result1.value).toBe(1);

      const result2 = min(-5, -1, -10);
      expect(result2.success).toBe(true);
      expect(result2.value).toBe(-10);
    });

    it('should handle empty arrays in max/min', (): void => {
      const maxResult = max();
      expect(maxResult.success).toBe(false);
      expect(maxResult.error).toBe('Array is empty');

      const minResult = min();
      expect(minResult.success).toBe(false);
      expect(minResult.error).toBe('Array is empty');
    });

    it('should calculate sum correctly', (): void => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
      expect(sum([0])).toBe(0);
      expect(sum([])).toBe(0);
    });

    it('should calculate average correctly', (): void => {
      const result1 = average([1, 2, 3, 4, 5]);
      expect(result1.success).toBe(true);
      expect(result1.value).toBe(3);

      const result2 = average([10, 20, 30]);
      expect(result2.success).toBe(true);
      expect(result2.value).toBe(20);
    });

    it('should handle empty array in average', (): void => {
      const result = average([]);
      expect(result.success).toBe(false);
      expect(result.error).toBe('Array is empty');
    });
  });
});
