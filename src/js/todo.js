import renderList from './render';
import {
  updateList, addItem, removeItem, toggleDone,
} from './list';
import '../style/index.scss';

renderList();

const submitNewItem = () => {
  const itemTitle = document.querySelector('#new-task');
  const itemDescription = document.querySelector('#new-task-detail');
  if (itemTitle.value.trim()) {
    const item = { title: itemTitle.value.trim() };
    if (itemDescription.value.trim()) {
      item.description = itemDescription.value.trim();
    }
    updateList(addItem, item);
    renderList();
  } else {
    itemTitle.placeholder = 'Please add task title';
  }
  document.getElementById('add-item-form').reset();
};

const getItemId = (classNames) => classNames.match(/item-(\d+)/)[1];

document.querySelector('#add-item').onclick = () => { submitNewItem(); };

document.querySelector('.todos').onclick = (event) => {
  if (event.target.closest('.todo-item')) {
    const itemId = getItemId(event.target.closest('.todo-item').getAttribute('class'));
    if (itemId) {
      if (event.target.closest('.item-delete')) {
        updateList(removeItem, itemId);
      } else {
        updateList(toggleDone, itemId);
      }
      renderList();
    }
  }
  return false;
};
