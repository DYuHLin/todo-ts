const listContainer = document.getElementById('list') as HTMLInputElement
const writerContainer = document.getElementById('write')
const sendTodo = document.getElementById('sendTodo')

type todo = {
    listed: string,
    done: boolean
}

let listItems: todo [] = []

const renderList = () => {
    let htmlTodo: string = ''
    listItems.forEach((item, id) => {
        let listedItem = `<li> <p>${item.listed}</p> <div class="button-group"> <button onclick="removeListItem(${id})">Delete</button><button>Update</button> </div> </li>`
        htmlTodo+= listedItem
    })
    listContainer.innerHTML = htmlTodo
}

renderList()

const AddListItem = () :string => {
    let writeVal: string = ((<HTMLInputElement>writerContainer)).value
    let listItm: todo = {listed: writeVal, done: false}
    listItems.push(listItm)
    console.log(listItems)
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
    return 'deleted'
}

const updateListItem = (id: number, note: string):string => {
    listItems[id].listed = note
    return 'updated'
}