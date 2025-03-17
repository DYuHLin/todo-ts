const listContainer = document.getElementById('list') as HTMLInputElement
const writerContainer = document.getElementById('write')
const sendTodo = document.getElementById('sendTodo')

type todo = {
    listed: string,
    done: boolean
}

let listItems: todo [] = []

const renderList = () => {
    listItems.map((item, id) => {
        if(listItems.length == 0){
            listContainer.value = '<p>There are no todos</p>'
        } else {
            let listedItem = `<li>${item.listed}</li>`
            listContainer.value = listedItem
        }
    })
}

const AddListItem = () :string => {
    let writeVal: string = ((<HTMLInputElement>writerContainer)).value
    let listItm: todo = {listed: writeVal, done: false}
    listItems.push(listItm)
    console.log(listItems)
    return 'added'
}

const removeListItem = (id: number):string => {
    listItems.splice(id, 1)
    return 'deleted'
}

const updateListItem = (id: number, note: string):string => {
    listItems[id].listed = note
    return 'updated'
}