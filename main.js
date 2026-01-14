const names = ['Rusthen', 'João', 'julia',10,true];

//add to the end
names.push('Pedro');

//Add to the beginning
names.unshift('Primeiro');

//Remove from the end
names.pop();

//Rename an item
names[3] = 'Pascoal';

const sortedName = names.sort();

const namesIsArray = Array.isArray(names);

console.log(namesIsArray);