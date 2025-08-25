# 🌿 Harjoitustyö – Luontoaiheinen verkkosovellus

## 🖼 Yleiskuvaus

Harjoitustyö on monipuolinen valokuvagalleria, joka yhdistää visuaaliset kuvat, mietelauseet ja interaktiivisia toimintoja – kuten paikalliseen sijaintiin perustuvan säätiedon, astronomisia faktoja ja kevyitä pelejä. Sivusto koostuu viidestä pääteemasta, jotka kukin tarjoavat oman näkökulmansa luontoon.

## 🔧 Ominaisuudet

* Responsiivinen käyttöliittymä eri näyttökoille
* Reaaliaikainen paikallinen sää (OpenWeatherMap API)
* Kellonaika
* Astronomiset tiedot: auringon ja kuun nousu- ja laskuajat, kuun etäisyys
* Interaktiivinen lintujen tunnistuspeli
* Laskuri, joka tallentaa tiedon localStorageen
* Koko näytön tila (fullscreen) mahdollista tuplaklikkauksella tai kaksoisnapautuksella – toimii myös mobiililaitteilla (Chrome)

## 📁 Teemat ja toteutus

### 1. Maisema

Näyttää rauhallisia maisemakuvia ja mietelauseita. Reaaliaikainen kello ja sää käyttäjän sijainnin mukaan.
**Tekninen toteutus:**

* Sijainti: Geolocation API
* Säädata: OpenWeatherMap

### 2. Luonto

Luontokuvien ohella näytetään visuaalinen aurinkokartta, joka havainnollistaa vuodenkierron tapahtumia (päivänseisaukset ja tasauspäivät).
**Tekninen toteutus:**

* Aurinkokartta perustuu matemaattiseen malliin Maan radasta

### 3. Linnut

Lintujen tunnistuspeli, jossa käyttäjä valitsee oikean linnun kuvien perusteella.
**Tekninen toteutus:**

* JavaScript + selainmuisti
* Pelilogiikka: satunnaisvalinnat, pisteytys ja tallennus

### 4. Kuu

Näyttää auringon ja kuun nousu- ja laskuajat sekä kuun etäisyyden.
**Tekninen toteutus:**

* SunCalc-kirjasto:

```javascript
const sunTimes = SunCalc.getTimes(date, lat, lon);
const moonTimes = SunCalc.getMoonTimes(date, lat, lon);
const moonPos = SunCalc.getMoonPosition(date, lat, lon);
```

### 5. Info

Esittelee sivuston tekijän sekä laskuripelin, jossa käyttäjä voi antaa palautetta (“Piditkö sivusta?”).
**Tekninen toteutus:**

* Käyttäjän laskuriarvo tallennetaan localStorageen:

```javascript
localStorage.setItem('laskuriArvo', this.count);
```

## 🛠 Käytetyt teknologiat

* HTML5, CSS, JavaScript 
* OpenWeatherMap API
* SunCalc-kirjasto
* Geolocation API
* localStorage
* Git, GitHub ja GitHub Pages

## 🌐 Julkaisu

Sivusto on julkaistu GitHub Pagesin kautta:
👉 [https://Antsa46.github.io/maisema-sivusto](https://Antsa46.github.io/maisema-sivusto)

## 📜 Lisenssit ja kiitokset

Tämä projekti hyödyntää seuraavia avoimen lähdekoodin kirjastoja ja palveluita:

- [SunCalc](https://github.com/mourner/suncalc)  
  Copyright (c) 2011–2015, Vladimir Agafonkin  
  Lisensoitu BSD 2-Clause -lisenssillä

- [OpenWeatherMap](https://openweathermap.org/) – säädata

