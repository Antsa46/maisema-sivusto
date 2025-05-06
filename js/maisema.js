import { UIController } from './oliot/UIController.js';
import { Kello } from './oliot/Kello.js';
import { TaustanVaihtaja } from './oliot/TaustanVaihtaja.js';
import { Saa } from './oliot/Saa.js';
import { Mietelauseet, maisemaLauseet } from './oliot/Mietelauseet.js';

window.addEventListener('load', () => {
  const mietelauseet = new Mietelauseet('lainaus', maisemaLauseet);
  new UIController(5000, mietelauseet);
  new Kello('kello');
  new Saa('saa', '1feaab8ba690bbdaf33f4d7ea6624dc9');
  new TaustanVaihtaja(
    'hero',
    'kuvarivi',
    'valokuvat/maisema/maisema10.jpg',
    { fadeDuration: 1000, overlayColor: 'rgba(0, 0, 0, 0.7)' }
  );
  
});



const pikkukuvat = document.querySelectorAll(".pikkukuva");

const tarkkailija = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("nakyva");
    }
  });
});

pikkukuvat.forEach(kuva => tarkkailija.observe(kuva));
