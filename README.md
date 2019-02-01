# Delorean telegram bot

[@delorean_bot](https://telegram.me/delorean_bot) sends you notifications in the future. 

## Requirements

* Valid [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key) with Geocoding and Time Zone APIs enabled.
* Telegram bot token, obtained from [Bot Father](https://t.me/BotFather).
* Node.js 0.12+, Redis 2.8+

## Installation 

Install dependencies:
```sh
npm install
```

Install [pm2](https://www.npmjs.com/package/pm2):
```sh
npm install -g pm2
```

Edit config:
```sh
vim src/config/index.js
```
or provide valid .env/docker.env file with the help of provided `env.example`

## Running

Run bot:
```sh
pm2 start process.json
```

## Running in docker

```sh
docker-compose up --build
```
