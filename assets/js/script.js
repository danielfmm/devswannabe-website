function updateHeaderBackground() {

  const header = document.querySelector('.container__header');
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY * 1.5;
  const scrollPercentage = Math.min(scrollPosition / (documentHeight - windowHeight), 0.9);
  header.style.backgroundColor = `rgba(0, 0, 0, ${scrollPercentage})`;

}


window.addEventListener('scroll', updateHeaderBackground);
updateHeaderBackground();