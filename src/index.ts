const listContainer = document.getElementById('list') as HTMLInputElement
const writerContainer = document.getElementById('write')
const sendTodo = document.getElementById('sendTodo')

type todo = {
    listed: string,
    done: boolean
}

let listItems: todo [] = JSON.parse(localStorage.getItem('todos') || '[]')

const renderList = () => {
    let htmlTodo: string = ''
    listItems.forEach((item, id) => {
        let listedItem = `<li class='list-item'>
            <input type="text" value=${item.listed} name="input-${id}" id="listedItem${id}" class="${item.done == true ? 'completed' : ''}"/> 
            <div class="button-group"> 
                <button onclick="removeListItem(${id})">Delete</button>
                <button onclick="updateListItem(${id})">Update</button> 
                <button onclick="completedTodo(${id})">Completed</button> 
            </div> 
        </li>`
        htmlTodo+= listedItem
    })
    listContainer.innerHTML = htmlTodo
}

renderList()

const AddListItem = () :string => {
    let writeVal: string = ((<HTMLInputElement>writerContainer)).value
    let listItm: todo = {listed: writeVal, done: false}
    listItems.push(listItm)
    console.log(listItems);
    ((<HTMLInputElement>writerContainer)).value = ""
    localStorage.setItem('todos', JSON.stringify(listItems))
    return 'added'
}

sendTodo?.addEventListener('click', (e: Event) => {
    e.preventDefault()
    AddListItem()
    renderList()
})

const removeListItem = (id: number):string => {
    listItems.splice(id, 1)
    console.log(listItems)
    renderList()
    localStorage.setItem('todos', JSON.stringify(listItems))
    return 'deleted'
}

const updateListItem = (id: number):string => {
    let inputVal:string = (<HTMLInputElement>document.getElementsByName(`input-${id}`)[0]).value
    listItems[id].listed = inputVal
    renderList()
    console.log(listItems)
    localStorage.setItem('todos', JSON.stringify(listItems))
    return 'updated'
}

const completedTodo = (id: number):string => {
    if(listItems[id].done == false){
        listItems[id].done = true;
        (<HTMLInputElement>document.getElementById(`listedItem${id}`)).classList.add('completed')
    } else {
        listItems[id].done = false;
        (<HTMLInputElement>document.getElementById(`listedItem${id}`)).classList.remove('completed')
    }
    localStorage.setItem('todos', JSON.stringify(listItems))
    return 'completed'
}