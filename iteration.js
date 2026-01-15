const numbers = [1,2,3,4,5];

//map
//map just modifies the own array
const numberByTwo = numbers.map(
    function(number){
        return number * 2;
 }
)

//filter
//filter creates a new array
const ages = [8, 13, 27, 30, 22, 40];


const EvenAges = ages.filter(
    function(age){
      return age % 2 === 0
    }
)

//Reduce
//It iterates through an array and transforms everything into a single value.
const sumOfAges = ages.reduce(
    function(age,acumulator){
        return acumulator + age;
    },0
)

console.log(sumOfAges)