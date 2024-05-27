import './style.css';

const banner = document.querySelector('.banner');
let show = 'a';

setInterval(() => {
  if (show === 'a') show = 'b';
  else if (show === 'b') show = 'c';
  else if (show === 'c') show = 'a';
  
  banner.classList.remove('a', 'b', 'c');
  banner.classList.add(show);
}, 4000);