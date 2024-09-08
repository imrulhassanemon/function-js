function ifEven(number){
    if(number % 2 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(ifEven(200))
console.log(ifEven(151))


function isOdd(number){
    if(number % 2 !== 0){
        return true
    }
    return false
}
console.log(isOdd(200))
console.log(isOdd(300))