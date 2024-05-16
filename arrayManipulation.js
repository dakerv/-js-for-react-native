//TASK ONE (1)

function processArray (number) {
    return number.map ( number => { 
        
        if (number % 2 === 0) {
            return number * number;
        } else {
            return number * 3
        }

    })
}

const inputArray = [1, 2, 3, 4, 5]
const resultArray = processArray (inputArray);
console.log (resultArray)

//TASK 2

function formatArrayStrings (stringArray, numberArray) {
    return
}
