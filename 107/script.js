const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#843b62', '#1d3557'];

document.addEventListener("click", (event) => {
  const menuOpen = document.getElementById('menuOpen');
  const buttonExit = document.getElementById('buttonMenuExit');
  const buttonColor = document.getElementById('buttonColorRefresh');
  const menuBurger = document.getElementById('menuBurger');

  const clickedInsideMenu = event.target.closest('#menuBurger');
  const clickedOpenButton = event.target.closest('#menuOpen');

  if (clickedOpenButton) {
    menuBurger.style.display = 'block';
  } else if (event.target.closest('#buttonMenuExit')) {
    menuBurger.style.display = 'none';
  } else if (event.target.closest('#buttonColorRefresh')) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
  } else if (!clickedInsideMenu) {
    menuBurger.style.display = 'none';
  }
});
