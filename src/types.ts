/**
 * Types for strict math operations
 */

export type NumericValue = number | bigint;

export interface MathResult {
  success: boolean;
  value?: number;
  error?: string;
}

export interface DivisionResult extends MathResult {
  quotient?: number;
  remainder?: number;
}

export interface MatrixNumber extends Array<number[] | number> {
  [index: number]: number[] | number;
}
