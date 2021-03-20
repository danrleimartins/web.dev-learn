const button = document.getElementById('js-button');

button.addEventListener('click', changeName);

function changeName() {
    var name = prompt('Hello, what is your name?');
    button.textContent = 'Welcome ' + name + '! Are you ready to Learn JS?';
}