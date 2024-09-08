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
