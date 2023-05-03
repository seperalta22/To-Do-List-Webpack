import taskArray from './taskArray.js';

const saveData = () => {
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};

export default saveData;
