export class KokoNakyma {
    constructor(viiveMs = 2000) {
      this.viiveMs = viiveMs;
      this.timer = null;
  
      this.init();
    }
  
    init() {
      
      const resetTimer = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.aktivoiFullscreen(), this.viiveMs);
      };
  
      document.addEventListener('mousemove', resetTimer);
      document.addEventListener('touchstart', resetTimer);
    }
  
    aktivoiFullscreen() {
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
      }
    }
  }
  