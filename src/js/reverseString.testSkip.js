import reverseString from "./reverseString";

test('No args',()=>{
    expect(()=>{reverseString()}).toThrow();
});

test('Empty string',()=>{
    expect(reverseString('')).toBe('');
});

test('Single character',()=>{
    expect(reverseString('A')).toBe('A');
});

test('Multiple character',()=>{
    expect(reverseString('Aba')).toBe('abA');
});

test('Invalid type: Number',()=>{
    expect(()=>{reverseString(13)}).toThrow();
});

test('Invalid type: Array',()=>{
    expect(()=>{reverseString([])}).toThrow();
});
