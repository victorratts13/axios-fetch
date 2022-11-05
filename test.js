import fetch from './index.js';
const api = new fetch();

api.get('https://api.sofascore.com/api/v1/sport/-10800/event-count').then(rest => {
    console.log(rest)
})