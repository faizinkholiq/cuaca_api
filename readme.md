# CUACA REST API ☁️

Rest API to get weather data based on [BMKG data](https://data.bmkg.go.id/prakiraan-cuaca/)

## A Little bit about us
### 🛠️ Built with :
- [BMKG data](https://data.bmkg.go.id/prakiraan-cuaca/)
- [Exprees.js](https://expressjs.com/)
<br />

## 🏁 Getting started
1. Clone the repo.
2. Go to your directory, then
- run `npm install`
- run `node server.js`

before that we need to install [node js](https://nodejs.org/en/) first

```
⚫ get all data :
localhost:4000/weather

⚫ get data by provinsi:
localhost:4000/weather?kota={nama_kota}

⚫ get data by kota:
localhost:4000/weather?provinsi={nama_provinsi}
```

<br/>

#### Inspired by & thanks to [@dennbagas](https://github.com/dennbagas/bmkg-weather-api)
