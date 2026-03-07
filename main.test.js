import { capitalize, reverseString, calculator } from "./main";

it('Capitalize', () => {
    expect(capitalize('dog')).toBe('Dog');
})

it('Reverse String', () => {
    expect(reverseString('dog')).toBe('god');
})

it('Calculator (Add Operation)', () => {
    expect(calculator.add(5, 5)).toBe(10);
})

it('Calculator (Subtract Operation)', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
})

it('Calculator (Divide Operation)', () => {
    expect(calculator.divide(10, 2)).toBe(5);
})

it('Calculator (Division by Zero Check)', () => {
    expect(calculator.divide(10, 0)).toBe(undefined);
})

it('Calculator (Multiply Operation)', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
})