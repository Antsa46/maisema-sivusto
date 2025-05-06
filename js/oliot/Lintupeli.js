export class Lintupeli {
    constructor(kysymysId, vastausId) {
      this.kysymysEl = document.getElementById(kysymysId);
      this.vastausEl = document.getElementById(vastausId);
  
      this.linnut = [
        { tiedosto: 'lintu1.jpg', nimi: 'Naakka', vaihtoehdot: ['Naakka', 'Varis', 'Harakka'], naytaKysymys: true },
        { tiedosto: 'lintu2.jpg', nimi: 'Sinitiainen', vaihtoehdot: ['Sinitiainen', 'Talitiainen', 'Västäräkki'], naytaKysymys: true },
        { tiedosto: 'lintu3.jpg', nimi: 'Joutsen', vaihtoehdot: ['Joutsen', 'Haikara', 'Hanhi'], naytaKysymys: true },
        { tiedosto: 'lintu4.jpg', nimi: 'Joutsen', vaihtoehdot: ['Joutsen', 'Haikara', 'Hanhi'], naytaKysymys: true },
        { tiedosto: 'lintu5.jpg', nimi: 'Kotka', vaihtoehdot: ['Kotka', 'Hiirihaukka', 'Varis'], naytaKysymys: true },
        { tiedosto: 'lintu6.jpg', nimi: 'Joutsen', naytaKysymys: false },
        { tiedosto: 'lintu7.jpg', nimi: 'Kotka', naytaKysymys: false },
        { tiedosto: 'lintu8.jpg', nimi: 'Kyhmyjoutsen', vaihtoehdot: ['Kyhmyjoutsen', 'Pulmussorsa', 'Hanhikukko'], naytaKysymys: true },
        { tiedosto: 'lintu9.jpg', nimi: 'Naakka', vaihtoehdot: ['Naakka', 'Varis', 'Korpinpoikanen'], naytaKysymys: true },
        { tiedosto: 'lintu10.jpg', nimi: 'Kastelukannu', vaihtoehdot: ['Kannuhaikara', 'Kastelukannu', 'Kannushaukka'], naytaKysymys: true },
        { tiedosto: 'lintu11.jpg', nimi: 'Talitiainen', vaihtoehdot: ['Talitiainen', 'Sinitiainen', 'Kuusitiainen'], naytaKysymys: true }
      ];
    }
  
    kysyLinnusta(tiedostoNimi) {
      const lintu = this.linnut.find(l => l.tiedosto === tiedostoNimi);
      if (!lintu) return;
  
      if (lintu.naytaKysymys === false) {
        this.kysymysEl.innerHTML = '';
        this.vastausEl.textContent = '';
        return;
      }
  
      this.kysymysEl.innerHTML = `
        <h3>Mikä lintu tämä on?</h3>
        <div class="vaihtoehdot">
          ${lintu.vaihtoehdot.map(n => `<button>${n}</button>`).join('')}
        </div>
      `;
      this.vastausEl.textContent = '';
  
      this.kysymysEl.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          const oikein = btn.textContent === lintu.nimi;
          this.vastausEl.textContent = oikein
            ? `Oikein! Tämä on ${lintu.nimi}.`
            : `Väärin. Oikea vastaus on ${lintu.nimi}.`;
        });
      });
    }
  }
  