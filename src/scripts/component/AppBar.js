class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-bar__menu">
        <button id="hamburgerButton">☰</button>
      </div>
      <div class="app-bar__brand">
        <h1>RESTO APPS</h1>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="#/explore">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/rafitanujaya/">About As</a></li>
        </ul>
      </nav>
      `;
  }
}

customElements.define('app-bar', AppBar);
