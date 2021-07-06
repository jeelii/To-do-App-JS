import { todos } from './list';

const todoList = document.querySelector('.todos');

const createDom = (element, className, content) => {
  const item = document.createElement(element);
  item.className = className;
  item.innerHTML = content;
  return item;
};

const renderItem = (item, i) => {
  const newItem = createDom('div', `todo-item item-${i}`, '');
  const itemIcon = createDom('span', 'item-icon', '<i class="fas fa-circle"></i>');
  const itemIconDone = createDom('span', 'item-icon--done', '<i class="fas fa-check-circle"></i>');
  const itemContent = createDom('div', 'item-content', '');
  itemContent.append(createDom('h3', 'item-headline', item.title));
  if (item.description) {
    itemContent.append(createDom('p', 'item-description', item.description));
  }
  if (item.done) {
    newItem.classList.add('todo-item--done');
    newItem.append(createDom('span', `item-delete delete-${i}`, '<i class="fas fa-trash"></i>'));
  }
  newItem.prepend(itemIcon, itemIconDone, itemContent);
  todoList.append(newItem);
};

const clearList = () => {
  document.querySelectorAll('.todo-item').forEach((item) => todoList.removeChild(item));
};

const renderList = () => {
  clearList();
  todos.forEach((item, i) => renderItem(item, i));
};

export default renderList;
