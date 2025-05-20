export class AurinkoKartta {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx    = this.canvas.getContext('2d');
    this.cx     = this.canvas.width / 2;
    this.cy     = this.canvas.height / 2;
    this.rx     = 120;     
    this.ry     = 100;     
    this.e      = 0.0167;  
    
    this.focusOffsetX = this.rx * this.e;
    this.focusOffsetY = 0;
    this.draw();
  }
 // test
  
  getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 1);
    return (date - start) / (1000*60*60*24);
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    
    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.ellipse(this.cx, this.cy, this.rx, this.ry, 0, 0, 2*Math.PI);
    ctx.stroke();

    
    const sunX = this.cx + this.focusOffsetX;
    const sunY = this.cy + this.focusOffsetY;
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(sunX, sunY, 7, 0, 2*Math.PI);
    ctx.fill();
    ctx.fillStyle = '#ccc';
    ctx.font = '10px sans-serif';
    ctx.fillText('aurinko', sunX-14, sunY+20);

    
    const today = new Date();
    const dayOfYear = this.getDayOfYear(today);
    const theta = - (dayOfYear/365.25) * 2*Math.PI;
    const earthX = this.cx + this.rx * Math.cos(theta);
    const earthY = this.cy + this.ry * Math.sin(theta);
    ctx.fillStyle = '#4da6ff';
    ctx.beginPath();
    ctx.arc(earthX, earthY, 4, 0, 2*Math.PI);
    ctx.fill();
    ctx.fillText('Maa', earthX-10, earthY-8);

    
    const seasonDates = [
      { d: new Date(today.getFullYear(), 2, 20), label: 'Kevätpäiväntasaus', offsetX: 5,  offsetY: 0 },
      { d: new Date(today.getFullYear(), 5, 21), label: 'Kesäpäivänseisaus', offsetX: -40, offsetY: -15 },
      { d: new Date(today.getFullYear(), 8, 23), label: 'Syyspäiväntasaus', offsetX: -80, offsetY: 0 },
      { d: new Date(today.getFullYear(),11,21), label: 'Talvipäivänseisaus', offsetX: -40, offsetY: 20 }
    ];
    ctx.strokeStyle = '#666';
    ctx.fillStyle   = 'white';
    seasonDates.forEach(s => {
      const ang = - ( this.getDayOfYear(s.d) / 365.25 ) * 2*Math.PI;
      const px  = this.cx + this.rx * Math.cos(ang);
      const py  = this.cy + this.ry * Math.sin(ang);
      ctx.beginPath();
      ctx.moveTo(this.cx, this.cy);
      ctx.lineTo(px, py);
      ctx.stroke();
      ctx.fillText(s.label, px + s.offsetX, py + s.offsetY);
    });

    
    const peri = new Date(today.getFullYear(), 0, 4);
    const periAng = - (this.getDayOfYear(peri)/365.25)*2*Math.PI;
    const pX = this.cx + this.rx * Math.cos(periAng);
    const pY = this.cy + this.ry * Math.sin(periAng);
    ctx.fillStyle = '#ccc';
    ctx.beginPath();
    ctx.arc(pX, pY, 4, 0, 2*Math.PI);
    ctx.fill();
    ctx.fillText('Perihelion (~0.983 AU)', pX-40, pY-10);

    
    const aphe = new Date(today.getFullYear(), 6, 4);
    const apheAng = - (this.getDayOfYear(aphe)/365.25)*2*Math.PI;
    const aX = this.cx + this.rx * Math.cos(apheAng);
    const aY = this.cy + this.ry * Math.sin(apheAng);
    ctx.beginPath();
    ctx.arc(aX, aY, 4, 0, 2*Math.PI);
    ctx.fill();
    ctx.fillText('Aphelion (~1.017 AU)', aX-40, aY+15);
  }
}
