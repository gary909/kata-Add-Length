function addLength(str) {
    const myArray = str.split(" ");
    let newArr = [];
    for (let i = 0; i < myArray.length; i++) {
        newArr.push(myArray[i] + ' ' + myArray[i].length);
    }
    return newArr;
}

console.log(addLength('apple ban')); // ["apple 5", "ban 3"]
console.log(addLength('you will win')); // ["you 3", "will 4", "win 3"]
