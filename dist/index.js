"use strict";
const listContainer = document.getElementById('list');
const writerContainer = document.getElementById('write');
const sendTodo = document.getElementById('sendTodo');
let listItems = [];
const renderList = () => {
    let htmlTodo = '';
    listItems.forEach((item, id) => {
        let listedItem = `<li class='list-item'>
            <input type="text" value=${item.listed} name="input-${id}" id="listedItem${id}"/> 
            <div class="button-group"> 
                <button onclick="removeListItem(${id})">Delete</button>
                <button onclick="updateListItem(${id})">Update</button> 
                <button onclick="completedTodo(${id})">Completed</button> 
            </div> 
        </li>`;
        htmlTodo += listedItem;
    });
    listContainer.innerHTML = htmlTodo;
};
renderList();
const AddListItem = () => {
    let writeVal = writerContainer.value;
    let listItm = { listed: writeVal, done: false };
    listItems.push(listItm);
    console.log(listItems);
    return 'added';
};
sendTodo === null || sendTodo === void 0 ? void 0 : sendTodo.addEventListener('click', (e) => {
    e.preventDefault();
    AddListItem();
    renderList();
});
const removeListItem = (id) => {
    listItems.splice(id, 1);
    console.log(listItems);
    renderList();
    return 'deleted';
};
const updateListItem = (id) => {
    let inputVal = document.getElementsByName(`input-${id}`)[0].value;
    listItems[id].listed = inputVal;
    renderList();
    console.log(listItems);
    return 'updated';
};
const completedTodo = (id) => {
    if (listItems[id].done == false) {
        listItems[id].done = true;
        document.getElementById(`listedItem${id}`).classList.add('completed');
    }
    else {
        listItems[id].done = false;
        document.getElementById(`listedItem${id}`).classList.remove('completed');
    }
    return 'completed';
};
