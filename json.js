const todos = [
    {
        id: '1',
        description: 'Estudar programação',
        isCompleted: false
    },
    {
        id: '2',
        description: 'Ler',
        isCompleted: true
    },
    {
        id: '3',
        description: 'Treinar',
        isCompleted: true
    }
]
//text format
//Sending and receiving data between systems
const todosJSON = JSON.stringify(todos)

//Transforming Json to a list
const todosList = JSON.parse(todosJSON)

console.log(todosJSON)
console.log(todosList)