function evenSizeString(str){
    const size = str.length;
    console.log(str, size)
    if(size % 2 === 0){
        console.log("this is even size")
        return true
    }
    else{
        console.log("this is odd size")
        return false
    }
}

evenSizeString("Dhaka")
evenSizeString("faka")



function doubleOrTriple(number, double){
    if(double){
        return number * 2
    }
    else{
        return number * 3 
    }
}

const bul = doubleOrTriple(5, true)
console.log("it will return duble ", bul)
const bul2 = doubleOrTriple(10, false)
console.log("It returns triple", bul2)


console.log("--------------------------------------------------")

function numberOfElements (numbers){
    const len = numbers.length;
    return len
}

console.log(numberOfElements([1, 2, 3, 4, 5, 7, 3, 2, 4, 2]))