export class Kello {
    constructor(elementId) {
      this.el = document.getElementById(elementId);
      this.paivita();
    }
  
    paivita() {
      const nyt = new Date();
      const tunnit = String(nyt.getHours()).padStart(2, '0');
      const minuutit = String(nyt.getMinutes()).padStart(2, '0');
      this.el.textContent = `${tunnit}:${minuutit}`;
      setTimeout(() => this.paivita(), 1000);
    }
  }
  