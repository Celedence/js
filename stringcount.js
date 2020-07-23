const letter = ["a","b","a","c","b","d","a","f"];

let count = [];

letter.forEach(item => {
    if(count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});

console.log(count);