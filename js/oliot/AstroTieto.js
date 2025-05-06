export class AstroTieto {
    constructor(elemId, lat = 60.192059, lon = 24.945831) {
      this.el  = document.getElementById(elemId);
      this.lat = lat;
      this.lon = lon;
    }
  
    async init() {
      const now = new Date();
  
      
      const sunTimes  = SunCalc.getTimes(now, this.lat, this.lon);
      const moonTimes = SunCalc.getMoonTimes(now, this.lat, this.lon);
      const moonPos  = SunCalc.getMoonPosition(now, this.lat, this.lon);
      const distance = moonPos.distance
        ? Math.round(moonPos.distance) + ' km'
        : '—';
  
      
      this.el.innerHTML = `
        <div>☀️ Auringonnousu: ${sunTimes.sunrise.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</div>
        <div>☀️ Auringonlasku: ${sunTimes.sunset .toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</div>
        <div>🌙 Kuun nousu:  ${moonTimes.rise ? moonTimes.rise.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : '—'}</div>
        <div>🌙 Kuun lasku:  ${moonTimes.set  ? moonTimes.set .toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : '—'}</div>
        <div>🌌 Kuun etäisyys: <strong>${distance}</strong></div>
      `;
    }
  }
  