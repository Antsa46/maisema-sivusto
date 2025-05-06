export class Sijainti {
  static async hae() {
    if (!navigator.geolocation) {
      throw new Error('Geolokaatio ei ole tuettu tässä selaimessa');
    }

    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        pos => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        err => reject(err)
      );
    });
  }
}
