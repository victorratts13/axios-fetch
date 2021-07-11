const axios = require('axios').default;
const fetchData = require('fetch').fetchUrl;
const { isJson } = require('./isJson')
const axiosCookieSuport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
var headers = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36'
};
axiosCookieSuport(axios);
const cookieJar = new tough.CookieJar();
let apiCookie = { withCredentials: true, jar: cookieJar };

class fetchAxios{
    constructor(axiosConfigData = {
        proxy: false,
        headers: headers,
        withCredentials: true,
        jar: cookieJar
    }){
        this.axiosConfig = axiosConfigData || axiosConfig;
    }

    cookie(withCredentials = false){
        if(withCredentials){
            return apiCookie;
        }else{
            return {
                session: false,
                auth: apiCookie
            }
        }
    }

    get(url, body, options){
        return new Promise((resolve, reject) => {
            fetchData(url, {
                method: 'GET',
                headers: options.headers || this.axiosConfig.headers,
                cache: options.cache || 'default',
                payload: body || false
            }, (err, meta, body) => {
                if(err){
                    return reject(err)
                }else{
                    if(isJson(body.toString())){
                        return resolve(JSON.parse(body.toString()))
                    }else{
                        return resolve(body.toString())
                    }
                }
            })
        })
    }

    post(url, body, options){
        return new Promise((resolve, reject) => {
            fetchData(url, {
                method: 'POST',
                headers: options.headers || this.axiosConfig.headers,
                cache: options.cache || 'default',
                payload: body || false
            }, (err, meta, body) => {
                if(err){
                    return reject(err)
                }else{
                    if(isJson(body.toString())){
                        return resolve(JSON.parse(body.toString()))
                    }else{
                        return resolve(body.toString())
                    }
                }
            })
        })
    }
}

module.exports = fetchAxios