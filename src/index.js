import './style.css';
import addList from './modules/addList.js';
import inputAdd from './modules/inputAdd.js';
import refreshBtn from './modules/refreshBtn.js';
import { clearCompleted } from './modules/checker.js';
import refreshIcons from './img/refresh.svg';

const titleContainer = document.querySelector('.title-container');
const refreshIcon = document.createElement('img');
refreshIcon.src = refreshIcons;
refreshIcon.classList.add('refresh-icon');
refreshIcon.id = 'refresh';
titleContainer.appendChild(refreshIcon);

const addInput = document.getElementById('add-input');
addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && addInput.value !== '') {
    e.preventDefault();
    inputAdd();
  }
});

const clear = document.getElementById('clear-completed');
clear.addEventListener('click', clearCompleted);
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', refreshBtn);

addList();
