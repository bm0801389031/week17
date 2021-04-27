
//function statement named squareDigits with parameter num
function squareDigits(num){
    //return Number function wraping the whole string
    //String function with num as parameter split method
    //split at each number map method to target each element
    //of the string and multiply it by itself then join method
    //to join every new element
    return Number(String(num).split('').map((e) => e*e).join(''));
    }