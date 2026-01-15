// A structure that holds properties
const person = {
    firstName: 'Rusthen',
    lastName: 'Ronald',
    age: '19',
    hobbies : ['Tocar guitarra','Estudar','Treinar'],
    dog: {
        age: '4',
        name: 'Rex'
    }
}
/*
const firstName = person.firstName
const lastName = person.lastName
const age = person.age
const hobbies = person.hobbies
*/


//destructure object javascript
//that's the same thing 
//We can rename
const {firstName:primerioNome, lastName, age, hobbies , dog} = person

console.log(primerioNome)
console.log(lastName)
console.log(age)
console.log(hobbies[1])
console.log(dog)


//Add properties

//person.dog = 'Rex'

