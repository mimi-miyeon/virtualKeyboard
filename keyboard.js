const Keyboard = {
  properties : {
    value: '',
    capslock: false
  }
}

const keys = document.querySelectorAll('.keyboard__key');
keys.forEach(key => {
  key.addEventListener('click', () => {
    if(key.childElementCount === 0) {
      Keyboard.properties.value += key.textContent;
    } else if (key.querySelector('.material-icons').textContent === 'backspace') {
      Keyboard.properties.value = Keyboard.properties.value.substring(0, Keyboard.properties.value.length -1); 
    } else if (key.querySelector('.material-icons').textContent === 'keyboard_return') {
      Keyboard.properties.value += '\n';
    } else if (key.querySelector('.material-icons').textContent === 'space_bar') {
      Keyboard.properties.value += ' ';
    }

    const textArea = document.querySelector('.use--keyboard-input');
    textArea.value = Keyboard.properties.value;
  })
});

const capslock = document.querySelector('#caps')
capslock.addEventListener('click', () => {
    Keyboard.properties.capslock = !Keyboard.properties.capslock;
    capslock.classList.toggle('keyboard__key--active', Keyboard.properties.capslock)

    keys.forEach(key => {
    if(key.childElementCount === 0) {
      key.textContent = Keyboard.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
    }
  })
})

const doneBtn = document.querySelector('#done');
doneBtn.addEventListener('click', () => {
  document.querySelector('main').classList.add('keyboard--hidden')
});

const textArea = document.querySelectorAll('.use--keyboard-input');
textArea.forEach(area => {
  area.addEventListener('focus', () => {
    document.querySelector('main').classList.remove('keyboard--hidden')
  })
})