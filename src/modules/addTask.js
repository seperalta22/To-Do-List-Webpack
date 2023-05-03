import saveData from './saveData.js';
import taskArray from './taskArray.js';
import addList from './addList.js';

const addTask = (value) => {
  const task = {
    description: value,
    completed: false,
    index: 0,
  };
  taskArray.push(task);
  saveData();
  addList();
};

export default addTask;
