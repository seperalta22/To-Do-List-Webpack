import addTask from '../modules/addTask.js';
import taskArray from '../modules/taskArray.js';

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

describe('delete function', () => {
  test('should delete a task from the To Do List', () => {
    const btnDelete = document.querySelectorAll('.trash');
    btnDelete[0].click();
    const list = document.querySelectorAll('.task-label');
    expect(list.length).toEqual(1);
  });
  test('should change the content of taskArray', () => {
    expect(taskArray).toEqual([
      {
        description: 'hello Microverse',
        completed: false,
        index: 1,
      },
    ]);
  });
});