import addTask from '../modules/addTask.js';
import { clearCompleted } from '../modules/checker.js';
import taskArray from '../modules/taskArray.js';

document.body.innerHTML = `<div><input type="text" class="input" id="add-input" placeholder="Add to your list...">
<div class="list-container">
<ul class="list"></ul>
</div></div>`;

describe('edit function', () => {
  test('should edit the task description', () => {
    addTask('Hello Typescript');
    const input = document.querySelector('.task-label');
    input.value = 'Bye Vanilla JS';
    input.dispatchEvent(new Event('input'));
    expect(document.querySelector('.task-label').value).toBe('Bye Vanilla JS');
  });
  test('should update the taskArray', () => {
    const input = document.querySelector('.task-label');
    input.value = 'Hello Typescript';
    input.dispatchEvent(new Event('input'));
    expect(taskArray).toEqual([{
      description: 'Hello Typescript',
      completed: false,
      index: 1,
    }]);
  });
});

describe('update status', () => {
  test('should edit the taskArray', () => {
    addTask('Hello Vue');
    const checkbox = document.querySelectorAll('.checkbox');
    checkbox[0].click();
    checkbox[1].click();
    expect(taskArray).toEqual([{
      description: 'Hello Typescript',
      completed: true,
      index: 1,
    }, {
      description: 'Hello Vue',
      completed: true,
      index: 2,
    }]);
  });
  test('should update the status', () => {
    const checkbox = document.querySelectorAll('.checkbox');
    expect(checkbox[0].checked).toEqual(true);
  });
});

describe('clear completed', () => {
  test('should clear the completed tasks on localStorage', () => {
    delete window.location;
    window.location = { reload: jest.fn() };
    clearCompleted();
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([]);
  });
});