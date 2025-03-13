const listContainer = document.getElementById('list')
const writerContainer = document.getElementById('write')
const sendTodo = document.getElementById('sendTodo')

type todo = {
    listed: string,
    done: boolean
}

let listItems: todo [] = []

const AddListItem = () :string => {
    let writeVal: string = ((<HTMLInputElement>writerContainer)).value
    let listItm: todo = {listed: writeVal, done: false}
    listItems.push(listItm)
    console.log(listItems)
    return 'added'
}

const removeListItem = (id: number) => {
    listItems.splice(id, 1)
}

const updateListItem = (id: number) => {
    
}