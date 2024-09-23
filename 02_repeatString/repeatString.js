const repeatString = function(string, num) {
    let longString = ""
    if (num > 0 ){
        for (let i = 0; i < num; i++) {
            longString = longString.concat(string)
        }
    
        return longString
    } else {
        return "ERROR"
    }
    

};

//run in browser using `node <script name>`
console.log(repeatString('hey', 6))

// Do not edit below this line
module.exports = repeatString;
