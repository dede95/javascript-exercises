const removeFromArray = function(array, ...num) {
    // Removes number(s) from array 

    let newArray = []

    array.forEach((item) => {
        if (num.includes(item) === false){
            // Using `include` for array instead of `item in num`
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
