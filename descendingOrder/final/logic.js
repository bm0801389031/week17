//function statement named descendingOrder with parameter n
function descendingOrder(n){
    //1.string n to convert our input into a string, so that we can split
    //2.split method with no space pattern so that we can convert our
    //string into an array with individual characters
    //3.sort method to rearrange our string characters from lowest to highest
    //4.reverse method to flip our arrangement highest to lowest
    //5.join method to convert our array back into strin so that we
    //can use parseInt method
    //6.parseInt on the outside will convert our string into number
        return parseInt(String(n).split('').sort().reverse().join(''))
    }