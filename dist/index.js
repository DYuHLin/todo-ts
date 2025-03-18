"use strict";
const listContainer = document.getElementById('list');
const writerContainer = document.getElementById('write');
const sendTodo = document.getElementById('sendTodo');
let listItems = [];
const renderList = () => {
    let htmlTodo = '';
    listItems.forEach((item, id) => {
        let listedItem = `<li> <p>${item.listed}</p> <div class="button-group"> <button onclick="removeListItem(${id})">Delete</button><button>Update</button> </div> </li>`;
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
const updateListItem = (id, note) => {
    listItems[id].listed = note;
    return 'updated';
};
