const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
// Item Lists
const listColumns = document.querySelectorAll('.drag-item-list');
const backlogListEl = document.getElementById('backlog-list');
const onHoldListEl = document.getElementById('on-hold-list');
const completeListEl = document.getElementById('complete-list');
const progressListEl = document.getElementById('progress-list');

// Items
let updatedOnLoad = false;

// Initialize Arrays
let backlogListArray = [];
let onHoldListArray = [];
let completeListArray = [];
let progressListArray = [];
let listArrays = [];

// Drag Functionality
let draggedItem;
let currentColumn;
let dragging = false;

// Get Arrays from localStorage if available, set default values if not
function getSavedColumns() {
    if (localStorage.getItem('backlogItems')) {
        backlogListArray = JSON.parse(localStorage.backlogItems);
        onHoldListArray = JSON.parse(localStorage.onHoldItems);
        progressListArray = JSON.parse(localStorage.progressItems);
        completeListArray = JSON.parse(localStorage.completeItems);
    } else {
        backlogListArray = ['To-Do Thing 1', 'To-Do Thing 2'];
        onHoldListArray = ['Thinking About the Thing'];
        progressListArray = ['Doing This 1', 'Doing This 2'];
        completeListArray = ['Finished Thing 1'];
    }
}

// Set localStorage Arrays
function updateSavedColumns() {
    listArrays = [backlogListArray, onHoldListArray, progressListArray, completeListArray];
    const arrayNames = ['backlog', 'onHold', 'progress', 'complete'];
    arrayNames.forEach((arrayName, index) => {
        localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));
    });
}

// filter array to remove empty items
function filterArray(array){
    const filteredArray = array.filter(item => item !== null);
    return filteredArray;
}

// Create DOM Elements for each list item
function createItemEl(columnEl, column, item, index) {
    // console.log('columnEl:', columnEl);
    // console.log('column:', column);
    // console.log('item:', item);
    // console.log('index:', index);
    // List Item
    const listEl = document.createElement('li');
    listEl.classList.add('drag-item');
    listEl.textContent = item;
    listEl.draggable = true;
    listEl.setAttribute('ondragstart', 'drag(event)');
    listEl.contentEditable = 'true';
    listEl.id = index;
    listEl.setAttribute('onfocusout', `updateItem(${index}, ${column})`);
    // append
    columnEl.appendChild(listEl);

}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
    // Check localStorage once
    if(!updatedOnLoad){
        getSavedColumns();
    }
    // Backlog Column
    backlogListEl.textContent = '';
    backlogListArray.forEach((backlogItem, index) => {
        createItemEl(backlogListEl, 0, backlogItem, index);
    });
    backlogListArray = filterArray(backlogListArray);
    // On Hold Column
    onHoldListEl.textContent = '';
    onHoldListArray.forEach((onHoldItem, index) => {
        createItemEl(onHoldListEl, 1, onHoldItem, index);
    });
    onHoldListArray = filterArray(onHoldListArray);
    // Progress Column
    progressListEl.textContent = '';
    progressListArray.forEach((progressItem, index) => {
        createItemEl(progressListEl, 2, progressItem, index);
    });
    progressListArray = filterArray(progressListArray);
    // Complete Column
    completeListEl.textContent = '';
    completeListArray.forEach((completeItem, index) => {
        createItemEl(completeListEl, 3, completeItem, index);
    });
    completeListArray = filterArray(completeListArray);
    // Run getSavedColumns only once, Update Local Storage
    updatedOnLoad = true;
    updateSavedColumns();

}

// update item & delete if necessary, or update the array value
function updateItem(id, column){
    const selectedArray = listArrays[column];
    const selectedColumnEl = listColumns[column].children;
    if(!dragging){
        if(!selectedColumnEl[id].textContent){
            delete selectedArray[id];
        }else{
            selectedArray[id] = selectedColumnEl[id].textContent;
        }
        updateDOM();
    }
}

// add to column list, reset textbox
function addToColumn(column){
    const itemText = addItems[column].textContent;
    const selectedArray = listArrays[column];
    selectedArray.push(itemText);
    addItems[column].textContent = '';
    updateDOM();
}

// show add item input box
function showInputBox(column){
    addBtns[column].style.visibility = 'hidden';
    saveItemBtns[column].style.display = 'flex';
    addItemContainers[column].style.display = 'flex';
}

// hide input box
function hideInputBox(column){
    addBtns[column].style.visibility = 'visible';
    saveItemBtns[column].style.display = 'none';
    addItemContainers[column].style.display = 'none';
    addToColumn(column);
}

// allow arrays to reflect drag and drop items
function rebuildArrays(){
    backlogListArray = Array.from(backlogListEl.children).map(i => i.textContent);
    onHoldListArray = Array.from(onHoldListEl.children).map(i => i.textContent);
    progressListArray = Array.from(progressListEl.children).map(i => i.textContent);
    completeListArray = Array.from(completeListEl.children).map(i => i.textContent);
    // backlogListArray = [];
    // for(let i = 0; i < backlogList.children.length; i++){
    //     backlogListArray.push(backlogListEl.children[i].textContent);
    // }
    // onHoldListArray = [];
    // for(let i = 0; i < onHoldList.children.length; i++){
    //     onHoldListArray.push(onHoldListEl.children[i].textContent);
    // }
    // progressListArray = [];
    // for(let i = 0; i < progressList.children.length; i++){
    //     progressListArray.push(progressListEl.children[i].textContent);
    // }
    // completeListArray = [];
    // for(let i = 0; i < completeList.children.length; i++){
    //     completeListArray.push(completeListEl.children[i].textContent);
    // }
    updateDOM();
}

// when item starts dragging
function drag(e){
    draggedItem = e.target;
    dragging = true;
}

// column allows for items to drop
function allowDrop(e){
    e.preventDefault();
}

// when item enter column area
function dragEnter(column){
    listColumns[column].classList.add('over');
    currentColumn = column;
}

// dropping item
function drop(e){
    e.preventDefault();
    // remove bg color padding
    listColumns.forEach((column) => {
        column.classList.remove('over');
    });
    // add item to column
    const parent = listColumns[currentColumn];
    parent.appendChild(draggedItem);
    // dragging complete
    dragging = false;    
    rebuildArrays();
}

// on load
updateDOM();

