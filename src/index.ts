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
        let listedItem = `<li>
            <input type="text" value=${item.listed} name="input-${id}"/> 
            <div class="button-group"> 
                <button onclick="removeListItem(${id})">Delete</button>
                <button onclick="updateListItem(${id})">Update</button> 
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

const updateListItem = (id: number):string => {
    let inputVal:string = (<HTMLInputElement>document.getElementsByName(`input-${id}`)[0]).value
    listItems[id].listed = inputVal
    renderList()
    console.log(listItems)
    return 'updated'
}