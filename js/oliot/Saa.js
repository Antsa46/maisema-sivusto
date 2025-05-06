export class Saa {
    constructor(elementId, apiKey) {
      this.el = document.getElementById(elementId);
      this.apiKey = apiKey;
      this.haeSijaintiJaSaa();
    }
  
    haeSijaintiJaSaa() {
      if (!navigator.geolocation) {
        this.el.textContent = 'Sijaintia ei tueta';
        return;
      }
  
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.haeSaa(lat, lon);
        },
        error => {
          console.error('Geolokaatio epäonnistui:', error);
          this.el.textContent = 'Sijainnin käyttö estetty';
        }
      );
    }
  
    async haeSaa(lat, lon) {
      try {
        const vastaus = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=fi`
        );
        const data = await vastaus.json();
  
        if (!data.main || !data.name) {
          throw new Error('Säätieto puuttuu');
        }
  
        const kaupunki = data.name;
        const lampotila = Math.round(data.main.temp);
        this.el.textContent = `${kaupunki} ${lampotila > 0 ? '+' : ''}${lampotila}°C`;
      } catch (e) {
        console.error('Säävirhe:', e);
        this.el.textContent = 'Säätietoja ei saatavilla';
      }
    }
  }
  