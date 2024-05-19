// Test 3

const { formatArrayStrings }  = require ("./arrayManipulation.js")

  function createUserProfiles (names, modNames) {
  
  let count = 1;
  return (
    names.map ((name, index) => {
      return (
        { 
          originalName: name,
          modifiedName: modNames [index],

          id: count++
        }
      )
    })
)
}

//Test
const names = ["Ama", "Kofi", "Kweku", "Yaw"];
const numbers = [1, 2, 3, 4];
const modifiedName = formatArrayStrings (names, numbers);

const userProfiles =
createUserProfiles (names, modifiedName);

console.log (userProfiles);