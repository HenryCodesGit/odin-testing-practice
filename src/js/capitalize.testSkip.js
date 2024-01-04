import capitalize from './capitalize'
/*
test('', () => {

})
*/

test('Average Case', () => {
    expect(capitalize('hello')).toBe('Hello');
});
describe('Zero length entries', () =>{
    test('No arguments', () => {
        expect(capitalize()).toEqual(undefined);
    });
    test('No entry with \'\' returns undefined', () => {
        expect(capitalize('')).toEqual(undefined);
    })
});
describe('Invalid type', ()=>{
    test('Numbers', () => {
        expect(()=>{capitalize(1312)}).toThrow();
    })
    test('Arrays', () => {
        expect(()=>{capitalize(['a'])}).toThrow();
    })
    test('Objects', () => {
        expect(()=>{capitalize({name: 'asda'})}).toThrow();
    })
    test('Leading spaces are ignored', () => {
        expect(capitalize(' axxasd')).toBe(' axxasd');
    })
    test('Numeric leading characters are left the same', () => {
        expect(capitalize('1xxasd')).toBe('1xxasd');
    })
});
describe('Invalid leading characters', ()=>{
    test('Spaces', () => {
        expect(capitalize(' axxasd')).toBe(' axxasd');
    })
    test('Numeric', () => {
        expect(capitalize('1xxasd')).toBe('1xxasd');
    })
})




