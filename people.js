const userName = require("./name.js")
const hobby = require("./hobbies.js")

function people(){
    const {firstName,lastName} = userName(process.argv[2],process.argv[3])
    const {hobbies} = hobby(process.argv[4],process.argv[5],process.argv[6])
    const person = {
        firstName ,
        lastName,
        hobbies 
    }
    return person
}

console.log(people())