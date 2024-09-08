/*
    * create a function that will return only the even numbers 
    * return the sum of even numbers 
*/
// function evenNumbersOnly(numbers){
//     for(const number of numbers){
//         if(number % 2 === 0){
//             console.log("from this array this number is even number ", number)
//         }
//         else{
//             console.log("from this array this number is odd number", number)
//         }
        
//     }
// }
// const num = evenNumbersOnly([2, 3, 4, 5])
// console.log(num)


// let even = []
// let odd = []
// function evenOdd(numbers){
//     for(number of numbers){
//         if(number % 2 === 0 ){
//             even.push(number)
//         }else{
//             console.log("odd", number)
//             odd.push(number)
//         }
//     }
//     return even

// }

// const array = [2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 20, 27, 40, 45]
// const oddeven = evenOdd(array)
// console.log(oddeven)



// practice practice practice 

// let even = [];
// let sum = 0;

// function oddeven(numbers){
    
//     for(number of numbers){
//         if(number % 2 === 0){
//             console.log(number)
//             // even.push(number)
//             sum = sum + number
//         }
//     }
//     return sum
    
// }

// const array = [2, 3, 4, 5, 8, 3, 23, 12, 32, 42, 53]
// const num = oddeven(array)
// console.log("even numbers are", num)





// let sum = 0;

// function sumArray(array){
//     for(number of array){
//         console.log(number)
//         sum = sum + number
//     }
//     return sum
// }
// const arr = [2, 3, 4, 5]
// const total = sumArray(arr)
// console.log("sum of array", total)

// practice practice practice 

// let newArr = []

// function oddEven(numbers){
//     for(number of numbers){
//         if(number % 2 === 0){
//             // console.log(number)
//             newArr.push(number)
//         }
//     }
//     return newArr
// }

// const array = [2, 3, 4, 5, 2, 12, 21, 34, 37, 39, 47, 29, 49]
// const num = oddEven(array)
// console.log(num)



// add array even number 

let numm = 0;

function addEven(numbers){
    for(number of numbers){
        if(number % 2 === 0){
            console.log(number)
            numm = numm + number
        }
    }
    return numm
}

const arr = [2, 3, 4, 1, 2, 3, 32, 31, 9, 19, 27, 17]
const totalEvenSum = addEven(arr)
console.log("total", totalEvenSum)