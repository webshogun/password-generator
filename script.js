const stylesheet = document.getElementById('theme');
let selectedTheme = localStorage.getItem('theme');

function setTheme(theme) {
  stylesheet.setAttribute('href', `styles/${theme}-theme.css`);
}

setTheme(selectedTheme);

function ThemeHandler() {
  selectedTheme = selectedTheme === 'dark' ? 'light' : 'dark';
  setTheme(selectedTheme);
  localStorage.setItem('theme', selectedTheme);
}
