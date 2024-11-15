const userName = require("./name.js")
const hobby = require("./hobbies.js")

const userParams = {
    name: process.argv[2],
    surname : process.argv[3],
    hobby1 : process.argv[4],
    hobby2: process.argv[5],
    hobby3: process.argv[6]

}

 const {name, surname, hobby1 , hobby2 , hobby3} = userParams

function people(name = 'Mario', surname = 'Rossi' , hobby1 = '', hobby2 = '' , hobby3 = ''){
    const {firstName,lastName} = userName(name,surname,)
    const {hobbies} = hobby(hobby1,hobby2,hobby3)
    const person = {
        firstName ,
        lastName,
        hobbies 
    }
    return person
}

console.log(people(name,surname,hobby1,hobby2,hobby3))