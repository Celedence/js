function bubbleSort(arr){
    var noSwaps;
    for(var i = 0; i < arr.length; i++){
        noSwaps = true;
        for(var j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                //swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
// the niave method
bubbleSort([23,45,22,1]);

