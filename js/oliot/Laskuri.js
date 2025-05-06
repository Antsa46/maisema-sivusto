export class Laskuri {
  constructor() {
    const tallennettu = localStorage.getItem('laskuriArvo');
    this.count = tallennettu !== null ? parseInt(tallennettu) : 0;

    this.counterElement = document.getElementById('laskuri-naytto');
    this.lastPressed = 0;

    this.updateCounter(); 
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.getElementById('thumbs-up').addEventListener('click', () => {
      this.handleButtonClick(1);
    });

    document.getElementById('thumbs-down').addEventListener('click', () => {
      this.handleButtonClick(-1);
    });

    document.getElementById('reset').addEventListener('click', () => {
      this.handleReset();
    });
  }

  handleButtonClick(value) {
    const currentTime = new Date().getTime();
    if (currentTime - this.lastPressed >= 700) {
      this.count += value;
      this.lastPressed = currentTime;
      this.updateCounter();
      this.tallennaLocalStorageen();
    }
  }

  handleReset() {
    this.count = 0;
    this.updateCounter();
    this.tallennaLocalStorageen();
  }

  updateCounter() {
    this.counterElement.textContent = this.count;
  }

  tallennaLocalStorageen() {
    localStorage.setItem('laskuriArvo', this.count);
  }
}
