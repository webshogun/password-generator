const stylesheet = document.getElementById('theme');
const pass = document.getElementById('password');
let selectedTheme = localStorage.getItem('theme');

function setTheme(theme) {
  stylesheet.setAttribute('href', `styles/${theme}-theme.css`);
}

setTheme(selectedTheme);

function themeHandler() {
  selectedTheme = selectedTheme === 'dark' ? 'light' : 'dark';
  setTheme(selectedTheme);
  localStorage.setItem('theme', selectedTheme);
}

function copyHandler(id) {
  const copy = document.getElementById(id);
  navigator.clipboard.writeText(copy.value);
}

function generatePassword() {
  const size = document.querySelector('.size');
  const length = parseInt(size.value);

  if (isNaN(length) || length <= 0) {
    alert('Please enter a valid positive number for password length.');
    return;
  }

  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  pass.setAttribute('value', password);
}
