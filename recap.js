function add (price1, price2){
    const total = price1 + price2
    return total
}

const totalBill = add(5, 100);

function add2 (price1, price2){
    return price1 + price2
}

const bit2 = add2(5, 100)

console.log(totalBill, bit2)



function doMath(num1, num2){
    const sum = num1 + num2
    const diff = num1 - num2
    const mul  = sum * diff
    const result = mul /2
    return result

}

const math = doMath(10,5)
console.log(math)