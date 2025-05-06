export class TaustanVaihtaja {
  constructor(heroId, kuvariviId, alkuKuvaUrl, options = {}) {
    this.hero = document.getElementById(heroId);
    this.kuvarivi = document.getElementById(kuvariviId);
    this.alkuKuva = alkuKuvaUrl;
    this.kuvaAlkuLisatty = false;

    this.fadeDuration = options.fadeDuration ?? 1000;
    this.overlayColor = options.overlayColor ?? '#000';

    this.overlay = document.createElement('div');
    Object.assign(this.overlay.style, {
      position: 'absolute',
      inset: '0',
      backgroundColor: this.overlayColor,
      opacity: '0',
      transition: `opacity ${this.fadeDuration}ms ease`,
      pointerEvents: 'none',
      zIndex: '0'
    });
    this.hero.insertBefore(this.overlay, this.hero.firstChild);

    this.asetaAlkuTausta();
    this.lisaaKlikkausToiminto();
  }

  asetaAlkuTausta() {
    this.hero.style.backgroundImage = `url("${this.alkuKuva}")`;
    this.hero.style.backgroundSize = 'contain';
    this.hero.style.backgroundRepeat = 'no-repeat';
    this.hero.style.backgroundPosition = 'center';
  }

  lisaaKlikkausToiminto() {
    this.kuvarivi.addEventListener('click', event => {
      if (!event.target.classList.contains('pikkukuva')) return;
      const valittu = event.target.getAttribute('src');
      this.overlay.style.opacity = '1';
      setTimeout(() => {
        this.hero.style.backgroundImage = `url("${valittu}")`;
        this.overlay.style.opacity = '0';
      }, this.fadeDuration);
      if (!this.kuvaAlkuLisatty && !valittu.includes(this.alkuKuva.split('/').pop())) {
        this.lisaaAlkuperainenKuva();
      }
    });
  }

  lisaaAlkuperainenKuva() {
    const img = document.createElement('img');
    img.src = this.alkuKuva;
    img.alt = 'Aloituskuva';
    img.classList.add('pikkukuva');
    this.kuvarivi.appendChild(img);
    this.kuvaAlkuLisatty = true;
  }
}
