const stylesheet = document.getElementById('theme');
let selectedTheme = localStorage.getItem('theme');
const pass = document.getElementById('password');

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
  const length = 12;
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  pass.setAttribute('value', password);
}
