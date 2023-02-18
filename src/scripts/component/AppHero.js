class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Resto App</h1>
          <p class="hero__tagline">
            Informasi restoran terupdate setiap saat cocok untuk memilih
            restoran saat ingin makan
          </p>
        </div>
      </div>
      `;
  }
}

customElements.define('app-hero', AppHero);
