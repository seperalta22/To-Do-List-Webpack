import addTask from './addTask.js';

const inputAdd = () => {
  const input = document.getElementById('add-input').value;
  addTask(input);
};

export default inputAdd;
