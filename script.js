document.querySelector('.menu').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '78px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '20px 6vw';
    nav.style.background = 'rgba(7,16,12,.98)';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
  }
});
