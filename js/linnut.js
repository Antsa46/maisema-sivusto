import { UIController }    from './oliot/UIController.js';
import { Kello }           from './oliot/Kello.js';
import { TaustanVaihtaja } from './oliot/TaustanVaihtaja.js';
import { Mietelauseet }    from './oliot/Mietelauseet.js';
import { lintuLauseet }    from './oliot/Mietelauseet.js';
import { Lintupeli }       from './oliot/Lintupeli.js';

const peli = new Lintupeli('lintupelikysymys', 'lintupelivastaus');

document.querySelectorAll('.pikkukuva').forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    const tiedosto = src.split('/').pop(); 
    peli.kysyLinnusta(tiedosto);
  });
});

window.addEventListener('load', () => {
  const mietel = new Mietelauseet('lainaus', lintuLauseet);

  const tausta = new TaustanVaihtaja(
    'hero',
    'kuvarivi',
    'valokuvat/lintu/lintu1.jpg',
    { fadeDuration: 1500, overlayColor: 'rgba(0, 30, 60, 0.4)' }
  );

  const ui = new UIController(5000, mietel);
  ui.setTaustanVaihtaja(tausta);

  new Kello('kello');

  document.querySelectorAll('.pikkukuva').forEach(img => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('nakyva'));
    });
    obs.observe(img);
  });
});
