var form;
var itemList;
var filter;

window.onload = () => {
    form = document.getElementById('addForm');
    itemList = document.getElementById('items');
    filter = document.getElementById('filter');

    //Add event listeners
    form.addEventListener('submit', addItem);
    itemList.addEventListener('click', removeItem);
    filter.addEventListener('keyup', filterItems);
}

function addItem(e) {
    e.preventDefault();
    itemName = document.getElementById('item').value;
    if (itemName) {
        item = document.createElement('li');
        item.className = 'list-group-item';
        item.innerHTML = `${itemName}`
        button = document.createElement('button');
        button.className = 'btn btn-danger btn-sm float-right delete';
        button.innerHTML = 'X';
        item.appendChild(button);
        itemList.appendChild(item);
    } else
        errorAnimation();
}

function removeItem(e) {
    if (e.target.classList.contains('delete'))
        var li = e.target.parentElement;
    itemList.removeChild(li);
}

function filterItems() {
    filter = document.getElementById('filter').value.toLowerCase();
    items = itemList.getElementsByTagName("li");
    for (item of items)
        if (!item.textContent.toLowerCase().includes(filter))
            item.style.display = 'none';
        else
        item.style.display = 'block';
}

function errorAnimation() {
    input = document.getElementById('item');
    input.style.borderColor = 'red';
    input.placeholder = 'Enter a name for the item';
}