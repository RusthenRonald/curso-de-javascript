
for (let index = 0 ; index <= 10 ; index++) {
    console.log(index)
}

const cars = ['Ferrari', 'Tesla', 'Mercedes'];

for (let index = 0; index< cars.length ; index++){
    console.log(cars[index])
}

//For of
//For each car in cars list 
for (let car of cars){
    console.log(car)
}

//forEach
//We can use a second argument (index)
cars.forEach(
    function(car,index){
        console.log(`O carro ${car} está na posição ${index}`)
    }
)

//Use to iteract through objects
for (property in person){
    console.log(person[property])
}