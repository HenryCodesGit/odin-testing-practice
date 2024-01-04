export default function capitalize(s){
    //Edge case for no entry
    if(!s) return undefined;
    //Edge case invalid type
    if(typeof s !== 'string') throw 'Invalid type! This function only takes string values'

    let leading = s.slice(0,1);
    let rest = s.slice(1);

    return leading.toUpperCase()+rest;
}