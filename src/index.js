import './style.css';
import dots from './img/dots.svg';
import refresh from './img/refresh.svg';

const app = document.querySelector('#app');
const tasks = [
  {
    index: 0,
    description: 'buy milk',
    completed: false,
  },

  {
    index: 1,
    description: 'buy eggs',
    completed: false,
  },
  {
    index: 2,
    description: 'buy bread',
    completed: false,
  },
];

if (!app.hasChildNodes()) {
  const render = () => {
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    app.appendChild(titleContainer);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Today's To Do List";
    titleContainer.appendChild(title);

    const refreshIcon = document.createElement('img');
    refreshIcon.classList.add('refresh-icon');
    refreshIcon.src = refresh;
    titleContainer.appendChild(refreshIcon);

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    app.appendChild(inputContainer);

    const input = document.createElement('input');
    input.classList.add('input');
    input.type = 'text';
    input.placeholder = 'Add to your list...';
    inputContainer.appendChild(input);

    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container');
    app.appendChild(listContainer);

    const list = document.createElement('ul');
    list.classList.add('list');
    listContainer.appendChild(list);

    tasks.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');
      list.appendChild(listItem);

      const checkbox = document.createElement('input');
      checkbox.classList.add('checkbox');
      checkbox.type = 'checkbox';
      listItem.appendChild(checkbox);

      const description = document.createElement('p');
      description.classList.add('description');
      description.textContent = task.description;
      listItem.appendChild(description);

      const dotsIcon = document.createElement('img');
      dotsIcon.classList.add('dots-icon');
      dotsIcon.src = dots;
      listItem.appendChild(dotsIcon);
    });
  };

  render();
}
