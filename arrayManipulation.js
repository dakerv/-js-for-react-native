//TASK ONE (1)

function processArray (number) {
    return number.map ( number => { 
        
        if (number % 2 === 0) {
            return number ** 2;
        } else {
            return number * 3
        }

    })
}
//Test

const inputArray = [1, 2, 3, 4, 5]
const resultArray = processArray (inputArray);
console.log (resultArray)

//TASK 2

function formatArrayStrings (stringArray, numberArray) {
    return stringArray.map ((string, index) => {

        if (numberArray [index] % 2 === 0) 
    {
        return string.toUpperCase();
    }

    else
    {
        return string.toLowerCase();
    }


});
}

//Test
const stringsArray = ['cat', 'dog', 'horse', 'rat'];
const numbersArray = [1, 2, 3, 4];

const modifiedStrings = formatArrayStrings(stringsArray, numbersArray);

console.log(modifiedStrings);