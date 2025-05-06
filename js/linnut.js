import { UIController }    from './oliot/UIController.js';
import { Kello }           from './oliot/Kello.js';
import { TaustanVaihtaja } from './oliot/TaustanVaihtaja.js';
import { Mietelauseet } from './oliot/Mietelauseet.js';
import { lintuLauseet } from './oliot/Mietelauseet.js';
import { Lintupeli } from './oliot/Lintupeli.js';

const peli = new Lintupeli('lintupelikysymys', 'lintupelivastaus');

document.querySelectorAll('.pikkukuva').forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    const tiedosto = src.split('/').pop(); 
    peli.kysyLinnusta(tiedosto);
  });
});

const mietel = new Mietelauseet('lainaus', lintuLauseet);

window.addEventListener('load', () => {
  const mietel = new Mietelauseet('lainaus', lintuLauseet);
  new UIController(5000, mietel);
  new Kello('kello');

  new TaustanVaihtaja(
    'hero',
    'kuvarivi',
    'valokuvat/lintu/lintu1.jpg',
    { fadeDuration: 1500, overlayColor: 'rgba(0, 30, 60, 0.4)' }
  );

  document.querySelectorAll('.pikkukuva').forEach(img => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('nakyva'));
    });
    obs.observe(img);
  });
});
