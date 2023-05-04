import saveData from './saveData.js';
import taskArray from './taskArray.js';
import addList from './addList.js';

const refreshBtn = () => {
  taskArray.splice(0, taskArray.length);
  saveData();
  addList();
};

export default refreshBtn;
