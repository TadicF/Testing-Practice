import { capitalize, reverseString, calculator, caeserCipher } from "./main";

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

it('Caeser Cipher (1 char)', () => {
    expect(caeserCipher('a', 1)).toBe('b');
})

it('Caeser Cipher (2 char)', () => {
    expect(caeserCipher('ab', 1)).toBe('bc');
})

it('Caeser Cipher (3 char + shiftFactor)', () => {
    expect(caeserCipher('abc', 2)).toBe('cde');
})

it('Caeser Cipher (Wrapping)', () => {
    expect(caeserCipher('xyz', 3)).toBe('abc');
})

it('Caesar Cipher (Wrapping Uppercase)', () => {
    expect(caeserCipher('XYZ', 9)).toBe('GHI');
})

it('Caesar Cipher (Preservation)', () => {
    expect(caeserCipher('HeLLo', 3)).toBe('KhOOr');
})

it('Caesar Cipher (Punctation)', () => {
    expect(caeserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})