const listContainer = document.getElementById('list')
const writerContainer = document.getElementById('write')
const sendTodo = document.getElementById('sendTodo')

type todo = {
    listed: string,
    done: boolean
}

let listItems: todo [] = []

const AddListItem = (item: string) => {
    let writeVal: string = ((<HTMLInputElement>writerContainer)).value
    let listItm: todo = {listed: item, done: false}
    listItems.push(listItm)
}