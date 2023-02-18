class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>
      Copyright © 2021 - Resto Apps
      </p>
      `;
  }
}

customElements.define('app-footer', AppFooter);
