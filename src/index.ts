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
            <form action="#" onsubmit="updateListItem(${id})"> 
                <input type="text" readonly = true value=${item.listed} name="input-${id}"/> 
            </form>
            <div class="button-group"> 
                <button onclick="removeListItem(${id})">Delete</button>
                <button onclick="activateUpdate(${id})">Update</button> 
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

const activateUpdate = (id: number):string => {
    let inputVal:string | null = (<HTMLInputElement>document.getElementsByName(`input-${id}`)[0]).getAttribute('readonly')
    console.log(inputVal)
    return 'active'
}

const updateListItem = (e: Event, id: number):string => {
    e.preventDefault()
    let inputVal:string = (<HTMLInputElement>document.getElementsByName(`input-${id}`)[0]).value
    console.log(inputVal)
    listItems[id].listed = inputVal
    renderList()
    return 'updated'
}