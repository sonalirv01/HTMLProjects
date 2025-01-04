const inputField = document.getElementById('item-input');
const addButton = document.getElementById('add-btn');
const clearButton = document.getElementById('clear-btn');
const shoppingList = document.getElementById('shopping-list');

function addItem() {
  const itemText = inputField.value.trim();
  
  if (!itemText) {
    alert('Please enter an item!');
    return;
  }

  const li = document.createElement('li');
  
  li.innerHTML = `
    <img src="images/received.png" alt="Item">
    <span>${itemText}</span>
    <button class="edit-btn"><i class="fas fa-edit"></i></button>
    <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
  `;
  
  const editButton = li.querySelector('.edit-btn');
  editButton.addEventListener('click', function() {
    const newText = prompt('Update the item:', itemText);
    if (newText && newText.trim()) {
      li.querySelector('span').textContent = newText.trim();
    }
  });

  const deleteButton = li.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function() {
    const userConfirmed = confirm('Are you sure you want to delete item?');
    if (userConfirmed) {
      li.remove();
    }
  });

  shoppingList.appendChild(li);
  inputField.value = '';
}

function clearAll() {
  const userConfirmed = confirm('Are you sure you want to clear the entire list?');
  if (userConfirmed) {
    shoppingList.innerHTML = '';
  }
}

addButton.addEventListener('click', addItem);
inputField.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addItem();
  }
});
clearButton.addEventListener('click', clearAll);
