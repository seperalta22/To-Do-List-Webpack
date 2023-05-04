import saveData from './saveData.js';
import taskArray from './taskArray.js';
import { check } from './checker.js';
import dotsIcon from '../img/dots.svg';
import trashIcon from '../img/trash.svg';

const addList = () => {
  const list = document.querySelector('.list');
  let index = 0;
  list.innerHTML = '';

  for (let i = 0; i < taskArray.length; i += 1) {
    taskArray[i].index = i + 1;
    saveData();
  }

  const arrayTask = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < arrayTask.length; i += 1) {
    for (let j = 0; j < arrayTask.length; j += 1) {
      if (arrayTask[j].index === i + 1) {
        index = j;
        break;
      }
    }

    const taskElement = document.createElement('li');
    taskElement.id = 'list-item';
    taskElement.classList.add('list-item');
    list.appendChild(taskElement);

    const form = document.createElement('form');
    form.classList.add('desc-container');
    taskElement.appendChild(form);

    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = taskArray[index].completed ? 'checked' : '';
    form.appendChild(checkbox);

    const input = document.createElement('input');
    input.className = 'task-label';
    input.type = 'text';
    input.value = `${taskArray[index].description}`;
    input.id = 'task-label';
    input.style.textDecoration = taskArray[index].completed
      ? 'line-through'
      : '';
    input.style.color = taskArray[index].completed ? 'lightgray' : '';
    form.appendChild(input);

    const button = document.createElement('button');
    button.className = 'button';
    button.type = 'button';
    button.innerHTML = `<img src="${trashIcon}" alt="trash" class="trash">`;
    taskElement.appendChild(button);

    button.addEventListener('click', () => {
      taskArray.splice(i, 1);
      saveData();
      addList();
    });

    input.addEventListener('input', () => {
      taskArray[i].description = input.value;
      saveData();
    });

    input.addEventListener('focus', () => {
      button.innerHTML = `<img src="${dotsIcon}" alt="dots" class="dots">`;
    });

    input.addEventListener('focusout', () => {
      button.innerHTML = `<img src="${trashIcon}" alt="trash" class="trash">`;
    });
    checkbox.addEventListener('click', () => {
      check(i);
      // saveData(); // ver si funciona
      addList();
    });
  }
  document.querySelector('.input').value = '';
};

export default addList;
