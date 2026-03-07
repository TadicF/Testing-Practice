import { capitalize, reverseString } from "./main";

it('Capitalize', () => {
    expect(capitalize('dog')).toBe('Dog');
})

it('Reverse String', () => {
    expect(reverseString('dog')).toBe('god');
})