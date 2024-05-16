//TASK THREE (3)

function createUserProfiles (name, modifiedName) {
    return 
    const profiles = name.map ((name, index) => ({
        originalName: name, 
        modifiedName: modifiedName [index],
        id: index + 1
    }));

    return profiles;
    
}

module.exports = createUserProfiles;