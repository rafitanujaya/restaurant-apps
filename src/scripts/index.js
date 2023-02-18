/* for async await transpile */
import 'regenerator-runtime';

// import CSS Style
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/header.css';
import '../styles/hero.css';
import '../styles/favorite.css';
import '../styles/reviewFrom.css';
import '../styles/search.css';
import '../styles/responsive.css';

// import component
import './component/AppBar';
import './component/AppHero';
import './component/AppFooter';

// utils
import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#Content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
