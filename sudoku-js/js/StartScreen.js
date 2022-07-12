export default function StartScreen($target) {
  const startScreen = document.createElement('div');
  startScreen.classList.add('start-screen', 'active');
  $target.append(startScreen);

  const nameInput = document.createElement('input');
  nameInput.className('name-input');
};