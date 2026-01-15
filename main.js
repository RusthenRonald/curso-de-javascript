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
//How do I access objects inside a list?

const descriptionOfLastTodo = todos[2].description

console.log(descriptionOfLastTodo)