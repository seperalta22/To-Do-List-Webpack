import addTask from '../modules/addTask.js';
import taskArray from '../modules/taskArray.js';
import { check } from '../modules/checker.js';

document.body.innerHTML = `<div><input type="text" class="input" id="add-input" placeholder="Add to your list...">
<div class="list-container">
<ul class="list"></ul>
</div></div>`;

describe('add method', () => {
  test('should add a item to the list', () => {
    addTask('hello World');
    addTask('hello Microverse');
    const list = document.querySelectorAll('.task-label');
    expect(list.length).toEqual(2);
  });
  test('should change the value of taskArray', () => {
    expect(taskArray).toEqual([
      {
        description: 'hello World',
        completed: false,
        index: 1,
      },
      {
        description: 'hello Microverse',
        completed: false,
        index: 2,
      },
    ]);
  });
});

describe('check method', () => { 
  test('should toggle the completed status', () => {
    const taskArray = [
      { completed: false },
      { completed: true },
      { completed: false }
    ];
    check(1);
    expect(taskArray[1].completed).toBe(false);
  });
  test('should call saveData', () => {
    const taskArray = [
      { completed: false },
      { completed: true },
      { completed: false }
    ];
    const saveDataMock = jest.fn();
    check(1);
    expect(saveDataMock).toHaveBeenCalled();
  });
});