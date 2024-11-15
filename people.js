const userName = require("./name.js")

const hobby = require("./hobbies.js")


function people(){
    const {firstName,lastName} = userName('Leonardo','Corazzini')
    const {hobbies} = hobby('calcio','playstation','programmare')
    const person = {
        firstName ,
        lastName,
        hobbies 
    }
    return person
}

console.log(people())