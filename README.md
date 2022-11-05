# axios-fetch-request

axios fetch implementation for http/2 request

## install

for install this package, use npm or yarn

```bash
~# npm install axios-fetch-request --save

```

now, you need import this on your js project

```js
import fetch from "axios-fetch-request";
const api = new fetch(/* axios config or can be enpty for default */); // you can construct axios config into fetch constructor
```

> - NOTE: You can set params on constructor:

```js
{
    proxy: false,
    headers: headers,
    withCredentials: true,
    jar: cookieJar
}
```

## usage

you can define the methods for request on GET or POST params.

> - NOTE: Use Promises or Async Await functions.

```js
//method for get request is (url, body, options) and this return promisse callback
var { data } = await api.get("https://api.google.com/auth");
/*
   this return: 
   {
       "status":"ok",
       "data":"",
       "url":"https://api.google.com/auth"
   }
*/
```

## With Headers

You can set headers on request with param `options`

```js
var { data } = await api.get("https://api.google.com/auth", false, {
  headers: {
    accept: "*/*",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "sec-ch-ua":
      '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36",
  },
});
```
