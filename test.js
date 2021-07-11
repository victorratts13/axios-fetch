const fetch = require('./index');
const api = new fetch();

api.get('https://api.sofascore.com/api/v1/sport/-10800/event-count', false, false).then(rest => {
    console.log(rest)
})