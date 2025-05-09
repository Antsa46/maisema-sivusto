import { UIController }    from './oliot/UIController.js';
import { Kello }           from './oliot/Kello.js';
import { TaustanVaihtaja } from './oliot/TaustanVaihtaja.js';
import { Mietelauseet }    from './oliot/Mietelauseet.js';
import { AurinkoKartta }   from './oliot/AurinkoKartta.js';
import { luontoLauseet }   from './oliot/Mietelauseet.js';

window.addEventListener('load', () => {
  const mietel = new Mietelauseet('lainaus', luontoLauseet);

  const tausta = new TaustanVaihtaja(
    'hero',
    'kuvarivi',
    'valokuvat/kuu/kuu1.jpg',
    { fadeDuration: 1500, overlayColor: 'rgba(40,40,40,0.4)' }
  );

  const ui = new UIController(5000, mietel);
  ui.setTaustanVaihtaja(tausta);

  new Kello('kello');
  new AurinkoKartta('aurinkokartta');

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
