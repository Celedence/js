// iteratively
function factorial(num){
    let total = 1;
    for(let i = 0; i < num.length; i++){
        total *= i;
    }
    return total;
}

// recursion
function fact(num){
    if(num === 1) return 1;
    return num * factorial(num -1)
}