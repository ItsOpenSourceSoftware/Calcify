let display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}

function toggleSign() {
  if (display.innerText.startsWith('-')) {
    display.innerText = display.innerText.slice(1);
  } else {
    display.innerText = '-' + display.innerText;
  }
}