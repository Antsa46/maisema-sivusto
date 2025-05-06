import { UIController }    from './oliot/UIController.js';
import { Kello }           from './oliot/Kello.js';
import { TaustanVaihtaja } from './oliot/TaustanVaihtaja.js';
import { Mietelauseet }    from './oliot/Mietelauseet.js';
import { AurinkoKartta }   from './oliot/AurinkoKartta.js';
import { luontoLauseet }   from './oliot/Mietelauseet.js';

window.addEventListener('load', () => {
  const mietel = new Mietelauseet('lainaus', luontoLauseet);
  new UIController(5000, mietel);
  new Kello('kello');
  new AurinkoKartta('aurinkokartta');

  new TaustanVaihtaja(
    'hero',
    'kuvarivi',
    'valokuvat/luonto/kuva1.jpg',
    { fadeDuration: 1500, overlayColor: 'rgba(0,50,0,0.5)' }
  );

  document.querySelectorAll('.pikkukuva').forEach(img => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('nakyva');
        }
      });
    });
    obs.observe(img);
  });
});
