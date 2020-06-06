
function linearSearch(arr,val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([12,34,3,55,3], 3)