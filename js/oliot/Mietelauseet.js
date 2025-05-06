export const maisemaLauseet = [
    {
      teksti: 'Rauha on siellä, missä sydän on luonnon kanssa yksin.',
      tekija: 'Tuntematon'
    },
    {
      teksti: 'Katso syvälle luontoon, ja ymmärrät kaiken paremmin.',
      tekija: 'Albert Einstein'
    },
    {
      teksti: 'Vuoret kutsuvat, ja minun on mentävä.',
      tekija: 'John Muir'
    },
    {
      teksti: 'Taivas on jalkojemme alla siinä missä yllämme.',
      tekija: 'Henry David Thoreau'
    },
    {
      teksti: "Luonnon ystävä on myös maailman ystävä.",
      tekija: "Aristoteles"
    },
    {
      teksti: "Ymmärtääkseen luonnon kauneuden, täytyy nähdä ja kuulla sydämellään.",
      tekija: "ChatGPT"
    }


  ];
  
  export const luontoLauseet = [
    {
      teksti: 'Luonto ei kiirehdi, silti kaikki saavutetaan.',
      tekija: 'Lao Tzu'
    },
    {
      teksti: 'Metsässä kaikki on niin kuin pitää.',
      tekija: 'Henry David Thoreau'
    },
    {
      teksti: 'Luonto ei ole paikka, jota vieraillaan - se on koti.',
      tekija: 'Gary Snyder'
    },
    {
      teksti: "Jos todella rakastat luontoa, löydät kauneutta kaikkialta.",
      tekija: "Vincent van Gogh"
    },
    {
      teksti: 'Metsä on sielun peili – siellä kuulee itsensä hiljaisuudessa.',
      tekija: 'Suomalainen sanonta'
    }
  ];

  export const lintuLauseet = [
    {
      teksti: 'Lintujen laulu on luonnon tapa hymyillä meille.',
      tekija: 'Tuntematon'
    },
    {
      teksti: 'Ruislinnun laulu korvissani, tähkäpäiden päällä täysikuu.',
      tekija: 'Eino Leino'
    },
    {
      teksti: 'Ajattelen 99 kertaa enkä löydä mitään. Lopetan ajattelemisen, uin hiljaisuudessa, ja totuus tulee luokseni.',
      tekija: 'Albert Einstein'
    },
    {
      teksti: 'Lintu ei laula, koska sillä on vastaus – se laulaa, koska sillä on laulu.',
      tekija: 'Maya Angelou'
    },
    {
      teksti: 'Aamu alkaa, kun ensimmäinen lintu ei vain laula – vaan herättää metsän.',
      tekija: 'Tuntematon'
    }
  ];

  export const kuuLauseet = [
    {
      teksti: 'Kuu valaisee hiljaisuuden yössä.',
      tekija: 'Tuntematon'
    },
    {
      teksti: "Kuu on tarkkaillut maata lähietäisyydeltä pidempään kuin kukaan muu. Sen on täytynyt nähdä kaikki, mitä täällä tapahtuu – mutta silti se pysyy hiljaa; se ei kerro tarinoita.",
      tekija: "Haruki Murakami"
    },
    {
      teksti: "Olemme kaikki tähtien pölyä.",
      tekija: "Carl Sagan"
    },
    {
      teksti: "Kaksi asiaa on ääretöntä: maailmankaikkeus ja ihmisten typeryys – ja en ole varma ensimmäisestä.",
      tekija: "Albert Einstein"
    },
    {
      teksti: "Tärkeää on, ettei koskaan lakkaa kyselemästä. Uteliaisuudella on oma olemassaolon syynsä.",
      tekija: "Albert Einstein"
    }
  ];
  
  
  
  
  export class Mietelauseet {
    constructor(lainausElementId, lauseet) {
      this.el = document.getElementById(lainausElementId);
      this.lauseet = lauseet;
  
      if (this.lauseet.length > 0) {
        this.naytaSatunnainen();
      } else {
        this.el.innerHTML = '<blockquote><span>(ei mietelauseita)</span></blockquote>';
      }
    }
  
    naytaSatunnainen() {
      const { teksti, tekija } = this.lauseet[Math.floor(Math.random() * this.lauseet.length)];
      this.el.innerHTML = `
        <blockquote>
          "${teksti}"
          <span>– ${tekija}</span>
        </blockquote>
      `;
    }
  }
  