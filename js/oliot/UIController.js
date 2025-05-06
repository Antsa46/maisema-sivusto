export class UIController {
  constructor(timeout = 6000, mietelauseetInstance = null) {
    this.timeout = timeout;
    this.hideTimer = null;
    this.peite = document.getElementById('peite');
    this.mietelauseet = mietelauseetInstance;
    this.nakyvissa = true;
    this.init();
  }

  init() {
    document.addEventListener('mousemove', () => this.showUI());
  }

  showUI() {
    if (!this.nakyvissa) {
      this.peite.style.opacity = '1';
      this.peite.style.pointerEvents = 'auto';
      this.nakyvissa = true;

      if (this.mietelauseet) {
        this.mietelauseet.naytaSatunnainen();
      }
    }

    clearTimeout(this.hideTimer);
    this.hideTimer = setTimeout(() => this.hideUI(), this.timeout);
  }

  hideUI() {
    this.peite.style.opacity = '0';
    this.peite.style.pointerEvents = 'none';
    this.nakyvissa = false;
  }
}
