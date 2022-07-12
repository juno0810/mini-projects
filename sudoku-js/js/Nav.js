export default function Nav($app) {
  const navContainer = document.createElement('div');
  navContainer.className = 'nav-container';

  const navLogo = document.createElement('a');
  navLogo.innerText = 'Sudoku';
  navLogo.className = 'nav-logo'

  const toggleButton = document.createElement('div');
  toggleButton.className = 'dark-mode-toggle';
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('darkmode', isDarkMode);
    document.querySelector('meta[name=theme-color]').setAttribute('content', isDarkMode ? '#1a1a2e' : '#fff');
  })

  const sunIcon = document.createElement('i');
  sunIcon.classList.add('bx', 'bxs-sun');
  const moonIcon = document.createElement('i');
  sunIcon.classList.add('bx', 'bxs-moon');

  toggleButton.append(sunIcon, moonIcon);
  navContainer.appendChild(toggleButton);
  $app.appendChild(navContainer);
};