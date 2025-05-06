export class UIController {
  constructor(timeout = 6000, mietelauseetInstance = null) {
    this.timeout = timeout;
    this.hideTimer = null;
    this.peite = document.getElementById('peite');
    this.mietelauseet = mietelauseetInstance;
    this.nakyvissa = true;
    this.lastTap = 0;
    this.init();
  }

  
  init() { 
    document.addEventListener('mousemove', () => this.showUI());
    document.addEventListener('dblclick', () => this.toggleFullscreen());
    document.addEventListener('touchstart', (e) => this.detectDoubleTap(e), { passive: false });

  }

  detectDoubleTap(event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - this.lastTap;

    if (tapLength < 400 && tapLength > 0) {
      this.toggleFullscreen();
      event.preventDefault(); 
    }

    this.lastTap = currentTime;
  }

  toggleFullscreen() {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
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
