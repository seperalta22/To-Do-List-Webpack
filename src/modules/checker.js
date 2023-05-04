import taskArray from './taskArray.js';
import saveData from './saveData.js';

const check = (index) => {
  if (taskArray[index].completed === false) {
    taskArray[index].completed = true;
  } else if (taskArray[index].completed === true) {
    taskArray[index].completed = false;
  }
  saveData();
};

const clearCompleted = () => {
  const arrayTask = taskArray.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(arrayTask));
  window.location.reload();
};

export { check, clearCompleted };
