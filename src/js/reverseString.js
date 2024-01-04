export default function reverseString(s){
    // Edge cases
    if(s === null || s===undefined) throw 'This function requires a non-empty string'
    if(typeof s !== 'string') throw 'This function requires a string type to be entered'

    let output = '';
    for(let i = s.length-1; i>=0; i-=1){
        output += s[i];
    }

    return output;
}