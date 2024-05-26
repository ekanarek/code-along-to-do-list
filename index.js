const addTodo = (event) => {
    event.preventDefault();

    const li = document.createElement('li');
    li.addEventListener('click', completeTodo);
    li.innerText = document.querySelector('#item').value;

    const button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener('click', removeTodo);
    li.appendChild(button);

    document.querySelector('ul').appendChild(li);
}

const form = document.querySelector('form');
form.addEventListener('submit', addTodo);

const removeTodo = (event) => {
    event.target.parentNode.remove();
}

const completedMessage = document.querySelector('#completed-message');

const showAside = () => {
    completedMessage.style.display = 'block';
    setTimeout(() => {
        completedMessage.style.display = 'none';
    }, 2000);
}

const completeTodo = (event) => {
    const itemChecked = event.target.getAttribute('aria-checked');
    if (itemChecked !== 'true') {
        event.target.setAttribute('aria-checked', 'true');

        showAside();
    } else {
        event.target.setAttribute('aria-checked', 'false');
    }
}