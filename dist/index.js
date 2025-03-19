"use strict";
const listContainer = document.getElementById('list');
const writerContainer = document.getElementById('write');
const sendTodo = document.getElementById('sendTodo');
let listItems = [];
const renderList = () => {
    let htmlTodo = '';
    listItems.forEach((item, id) => {
        let listedItem = `<li>
            <form action="#" onsubmit="updateListItem(${id})"> 
                <input type="text" readonly = true value=${item.listed} name="input-${id}"/> 
            </form>
            <div class="button-group"> 
                <button onclick="removeListItem(${id})">Delete</button>
                <button onclick="activateUpdate(${id})">Update</button> 
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
const activateUpdate = (id) => {
    let inputVal = document.getElementsByName(`input-${id}`)[0].getAttribute('readonly');
    console.log(inputVal);
    return 'active';
};
const updateListItem = (e, id) => {
    e.preventDefault();
    let inputVal = document.getElementsByName(`input-${id}`)[0].value;
    console.log(inputVal);
    listItems[id].listed = inputVal;
    renderList();
    return 'updated';
};
