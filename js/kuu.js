import { UIController }      from './oliot/UIController.js';
import { Kello }             from './oliot/Kello.js';
import { TaustanVaihtaja }   from './oliot/TaustanVaihtaja.js';
import { Mietelauseet, kuuLauseet } from './oliot/Mietelauseet.js';
import { AstroTieto }        from './oliot/AstroTieto.js';
import { Sijainti }          from './oliot/Sijainti.js';

window.addEventListener('load', async () => {
  const mietel = new Mietelauseet('lainaus', kuuLauseet);
  const ui = new UIController(5000, mietel);

  new Kello('kello');

  try {
    const { lat, lon } = await Sijainti.hae();
    const astro = new AstroTieto('astroTieto', lat, lon);
    await astro.init();
  } catch (err) {
    console.warn('Sijainti ei saatavilla, käytetään oletuskoordinaatteja.');
    const astro = new AstroTieto('astroTieto');
    await astro.init();
  }

  const tausta = new TaustanVaihtaja(
    'hero',
    'kuvarivi',
    'valokuvat/kuu/kuu1.jpg',
    { fadeDuration: 1500, overlayColor: 'rgba(40,40,40,0.4)' }
  );

  ui.setTaustanVaihtaja(tausta);

  document.querySelectorAll('.pikkukuva').forEach(img => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('nakyva'));
    });
    obs.observe(img);
  });
});
