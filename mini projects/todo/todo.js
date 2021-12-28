const addForm = document.querySelector('.add')
const list = document.querySelector(".todos")
const searchInput = document.querySelector('.search input')


// adding new todo
const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `
    list.innerHTML += html
}


addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const todo = addForm.add.value.trim()
    //console.log(todo)
    if (todo.length > 0){
        generateTemplate(todo)
        addForm.reset()
    }
})


// removing todo
list.addEventListener("click", (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})


// searching for a todo
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo) => {
            return todo.classList.add('filtered')
        })
    Array.from(list.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term)
         })
        .forEach((todo) => {
            return todo.classList.remove('filtered')
        })
}

searchInput.addEventListener("keyup", () => {
    const term = searchInput.value.trim().toLowerCase()
    //console.log(term)
    filterTodos(term)
})