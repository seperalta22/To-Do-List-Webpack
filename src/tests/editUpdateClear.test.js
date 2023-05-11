import addTask from '../modules/addTask.js';
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