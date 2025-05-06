export class AurinkoKartta {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.radiusX = 120;
    this.radiusY = 100;
    this.eccentricity = 0.0167;
    this.focusOffsetX = this.radiusX * this.eccentricity;
    this.focusOffsetY = this.radiusY * this.eccentricity;
    this.draw();
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.ellipse(
      this.centerX,
      this.centerY,
      this.radiusX,
      this.radiusY,
      0,
      0,
      2 * Math.PI
    );
    ctx.stroke();

    const sunX = this.centerX - this.focusOffsetX;
    const sunY = this.centerY - this.focusOffsetY;
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(sunX, sunY, 7, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#ccc';
    ctx.font = '10px sans-serif';
    ctx.fillText('aurinko', sunX - 14, sunY + 20);

    const today = new Date();
    const perihelionDate = new Date(today.getFullYear(), 0, 4);
    const days = (today - perihelionDate) / (1000 * 60 * 60 * 24);
    const angle = (days / 365.25) * 2 * Math.PI;
    const earthX = this.centerX + this.radiusX * Math.cos(angle);
    const earthY = this.centerY + this.radiusY * Math.sin(angle);
    ctx.fillStyle = '#4da6ff';
    ctx.beginPath();
    ctx.arc(earthX, earthY, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText('Maa', earthX - 10, earthY - 8);

    const seasons = [
      { angle: 0, label: 'Syyspäiväntasaus',    offsetX: -80, offsetY: 0 },
      { angle: Math.PI / 2, label: 'Kesäpäivänseisaus',    offsetX: -40, offsetY: -15 },
      { angle: Math.PI, label: 'Kevätpäiväntasaus',    offsetX: 5, offsetY: 0 },
      { angle: (3 * Math.PI) / 2, label: 'Talvipäivänseisaus',   offsetX: -40, offsetY: 20 }
    ];

    ctx.strokeStyle = '#666';
    ctx.fillStyle = 'white';
    seasons.forEach(s => {
      const px = this.centerX + this.radiusX * Math.cos(s.angle);
      const py = this.centerY + this.radiusY * Math.sin(s.angle);
      ctx.beginPath();
      ctx.moveTo(this.centerX, this.centerY);
      ctx.lineTo(px, py);
      ctx.stroke();
      ctx.fillText(s.label, px + s.offsetX, py + s.offsetY);
    });

    const PERI_DIST = 0.983;
    const APHE_DIST = 1.017;
    const periAngle = (3 * Math.PI) / 2;
    const apheAngle = Math.PI / 2;

    const pX = this.centerX + this.radiusX * Math.cos(periAngle);
    const pY = this.centerY + this.radiusY * Math.sin(periAngle);
    ctx.fillStyle = '#ccc';
    ctx.beginPath();
    ctx.arc(pX, pY, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText(`Perihelion (~${PERI_DIST} AU)`, pX - 40, pY - 10);

    const aX = this.centerX + this.radiusX * Math.cos(apheAngle);
    const aY = this.centerY + this.radiusY * Math.sin(apheAngle);
    ctx.beginPath();
    ctx.arc(aX, aY, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText(`Aphelion (~${APHE_DIST} AU)`, aX - 40, aY + 15);
  }
}
