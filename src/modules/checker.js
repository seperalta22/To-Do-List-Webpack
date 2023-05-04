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

export default check;
