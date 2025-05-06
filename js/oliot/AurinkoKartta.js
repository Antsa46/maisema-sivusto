export class AurinkoKartta {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.centerX = this.canvas.width / 2 - 40;
    this.centerY = this.canvas.height / 2;
    this.radiusX = 120;
    this.radiusY = 100;
    this.eccentricity = 0.0167;
    this.focusOffset = this.radiusX * this.eccentricity;
    this.draw();
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(this.centerX, this.centerY, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
    ctx.stroke();

    
    const sunX = this.centerX - this.focusOffset + 5;
    const sunY = this.centerY;
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(sunX, sunY, 7, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#ccc';
    ctx.font = '10px sans-serif';
    ctx.fillText('aurinko', sunX - 10, sunY + 18);

    
    const periX = this.centerX + this.radiusX;
    const apheX = this.centerX - this.radiusX;
    const labelY = this.centerY;

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(periX, labelY, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText('perihelion', periX - 20, labelY + 14);
    ctx.fillText('~0.983 AU', periX - 20, labelY + 28);

    ctx.beginPath();
    ctx.arc(apheX, labelY, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText('aphelion', apheX - 20, labelY + 14);
    ctx.fillText('~1.017 AU', apheX - 20, labelY + 28);

    
    ctx.strokeStyle = '#aaa';
    ctx.beginPath();
    ctx.moveTo(apheX, labelY);
    ctx.lineTo(periX, labelY);
    ctx.stroke();

    
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 3);
    const daysSinceStart = (today - start) / (1000 * 60 * 60 * 24);
    const angle = (daysSinceStart / 365.25) * 2 * Math.PI;

    const x = this.centerX + this.radiusX * Math.cos(angle);
    const y = this.centerY + this.radiusY * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#4da6ff';
    ctx.fill();
    ctx.fillStyle = '#4da6ff';
    ctx.fillText('Maa', x - 10, y - 8);

    const events = [
      { angle: Math.PI,           label: 'Kesäpäivänseisaus',     offsetY: -10 },    
      { angle: 3 * Math.PI / 2,   label: 'Syyspäiväntasaus',     offsetY: -10 },    
      { angle: 0,                 label: 'Talvipäivänseisaus',   offsetY: -10 },     
      { angle: Math.PI / 2,       label: 'Kevätpäiväntasaus',    offsetY: 10 }    
    ];

    ctx.strokeStyle = '#666';
    ctx.fillStyle = 'white';
    ctx.font = '10px sans-serif';

    for (const e of events) {
      const px = this.centerX + this.radiusX * Math.cos(e.angle);
      const py = this.centerY + this.radiusY * Math.sin(e.angle);
      ctx.beginPath();
      ctx.moveTo(this.centerX, this.centerY);
      ctx.lineTo(px, py);
      ctx.stroke();
      ctx.fillText(e.label, px + 5, py + e.offsetY);
    }
  }
}
