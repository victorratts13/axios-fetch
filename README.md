# axios-fetch-request
 axios fetch implementation for http/2 request

 ## install

 for install this package, use npm or yarn

 ```bash
~# npm install axios-fetch-request --save

 ```

 now, you need import this on your js project

 ```js
const fetch = require('axios-fetch-request');
const api = new fetch(/* axios config or can be enpty for default */); // you can construct axios config into fetch constructor
 ```

 ## usage

 you can define the methods for request on GET or POST params.

 ```js
//method for get request is (url, body, options) and this return promisse callback
api.get('https://api.google.com/auth', false, false).then(rest => {
    console.log(rest)
})
/*
    this return: 
    {
        "status":"ok",
        "data":"",
        "url":"https://api.google.com/auth"
    }
*/
 ```
