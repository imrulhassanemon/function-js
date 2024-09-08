
let sum = 0;

function sumArray(number){
    for(num of number){
        console.log(num)
        sum = sum + num
        
    }
    return sum
}

const total = sumArray([2, 3, 4, 5, 6])
console.log(total)