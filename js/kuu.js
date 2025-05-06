import { UIController }    from './oliot/UIController.js';
import { Kello }           from './oliot/Kello.js';
import { TaustanVaihtaja } from './oliot/TaustanVaihtaja.js';
import { Mietelauseet, kuuLauseet } from './oliot/Mietelauseet.js';
import { AstroTieto }      from './oliot/AstroTieto.js';
import { Sijainti }        from './oliot/Sijainti.js';

window.addEventListener('load', () => {
  const mietel = new Mietelauseet('lainaus', kuuLauseet);
  new UIController(5000, mietel);

  new Kello('kello');

  new Sijainti(
    (lat, lon) => {
      const astro = new AstroTieto('astroTieto', lat, lon);
      astro.init();
    },
    () => {
      const astro = new AstroTieto('astroTieto');
      astro.init();
    }
  );

  new TaustanVaihtaja(
    'hero',
    'kuvarivi',
    'valokuvat/kuu/kuu1.jpg',
    { fadeDuration: 1500, overlayColor: 'rgba(40,40,40,0.4)' }
  );

  document.querySelectorAll('.pikkukuva').forEach(img => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('nakyva'));
    });
    obs.observe(img);
  });
});
