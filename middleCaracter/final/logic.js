//function statement named getMiddle with parameter s
function getMiddle(s){
    //return s as a property of substr with parameter Math.ceil parameter
    //s.length divided by 2 minus 1
    //second parameter of substr which indicates the given number of
    //characters afterwards to return separated by a comma
    //s length modulo 2 equal to zero turnary operator 2 if truthy
    //1 if falsy separated by a colon
        return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
    }