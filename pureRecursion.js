
function collectOddValue(arr) {
    let newArr = [];

    if(arr.length === 0){
        return;
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValue(arr.slice(1)));
}
