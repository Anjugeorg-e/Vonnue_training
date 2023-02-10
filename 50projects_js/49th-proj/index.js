const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => AddTodo(todo))

}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    AddTodo()
})

function AddTodo(todo){
    let todoText = input.value

    if(todo){
        todoText = todo.text
    }
   // console.log(todoText)


    
    if(todoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText 
        
        todoEl.addEventListener('click', () =>{
             todoEl.classList.toggle('completed')
             updateLS()
            })
        
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl) 
        input.value = ''

        updateLS()
     }
   // console.log(todoText)
}

function updateLS(){
   const  todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text:todoEl.innerText,
            completed:todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}


//localStorage.setItem('name', 'anju')// if u are usimng o store items in local storage use in strings
// if u need to store object or arrays use json.stringify (object or array )

localStorage.setItem('todos', JSON.stringify(todos))
//JSON.parse(localStorage.getItem(obj)) // to get items from local storage

// hence we are using the stringify using json we have to use parse method to fetch items