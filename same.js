function same(arr1, arr2) {
    // accepts 2 arguements
    if (arr1.length != arr2.length) {
        return false;
        // verify arr lengths are the same
        // return false 
    }
    for(let i = 0; i < arr1.length; i++){
        // loop through 1st array
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // create variable,using index of to pass in the square of each value
        if(correctIndex === -1) {
            // -1 meaning it's not there
            return false;
        }
        arr2.splice(correctIndex,1)
        // removes from arr2
    }
    return true;
}
