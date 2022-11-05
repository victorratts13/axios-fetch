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
