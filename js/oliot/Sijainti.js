export class Sijainti {
  constructor(onSuccess, onError) {
    if (!navigator.geolocation) {
      onError?.(new Error('Geolokaatio ei tuettu'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => onSuccess(pos.coords.latitude, pos.coords.longitude),
      err => {
        console.warn('Geolokaatio epäonnistui:', err);
        onError?.(err);
      }
    );
  }
}
