import type { DivisionResult,MathResult, NumericValue } from './types';

/**
 * Add two numbers with strict typing
 * @param a - First number
 * @param b - Second number
 * @returns Sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtract two numbers with strict typing
 * @param a - First number
 * @param b - Second number
 * @returns Difference of a and b
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiply two numbers with strict typing
 * @param a - First number
 * @param b - Second number
 * @returns Product of a and b
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divide two numbers with error handling
 * @param dividend - Number to be divided
 * @param divisor - Number to divide by
 * @returns Division result with quotient, remainder, and error handling
 */
export function divide(dividend: number, divisor: number): DivisionResult {
  if (divisor === 0) {
    return {
      success: false,
      error: 'Division by zero is not allowed'
    };
  }

  return {
    success: true,
    quotient: Math.floor(dividend / divisor),
    remainder: dividend % divisor,
    value: dividend / divisor
  };
}

/**
 * Calculate the absolute value
 * @param num - Number to get absolute value of
 * @returns Absolute value
 */
export function abs(num: number): number {
  return Math.abs(num);
}

/**
 * Calculate power (base ^ exponent)
 * @param base - Base number
 * @param exponent - Exponent
 * @returns Result of base raised to exponent
 */
export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

/**
 * Calculate square root
 * @param num - Number to get square root of
 * @returns Square root result with error handling
 */
export function sqrt(num: number): MathResult {
  if (num < 0) {
    return {
      success: false,
      error: 'Cannot calculate square root of negative number'
    };
  }

  return {
    success: true,
    value: Math.sqrt(num)
  };
}

/**
 * Find the maximum value in an array
 * @param numbers - Array of numbers
 * @returns Maximum value
 */
export function max(...numbers: number[]): MathResult {
  if (numbers.length === 0) {
    return {
      success: false,
      error: 'Array is empty'
    };
  }

  return {
    success: true,
    value: Math.max(...numbers)
  };
}

/**
 * Find the minimum value in an array
 * @param numbers - Array of numbers
 * @returns Minimum value
 */
export function min(...numbers: number[]): MathResult {
  if (numbers.length === 0) {
    return {
      success: false,
      error: 'Array is empty'
    };
  }

  return {
    success: true,
    value: Math.min(...numbers)
  };
}

/**
 * Calculate the sum of array elements
 * @param numbers - Array of numbers
 * @returns Sum
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc: number, curr: number): number => acc + curr, 0);
}

/**
 * Calculate the average of array elements
 * @param numbers - Array of numbers
 * @returns Average result with error handling
 */
export function average(numbers: number[]): MathResult {
  if (numbers.length === 0) {
    return {
      success: false,
      error: 'Array is empty'
    };
  }

  const total: number = sum(numbers);
  return {
    success: true,
    value: total / numbers.length
  };
}
