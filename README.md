# KopkeAPI aka Turkish Meme API

*package.json'a import etme,*
```js
"dependencies": {
    "kopke-api": "github:erdem85/KopkeAPI"
}
```

package.json'a eklemek yerine `npm i github:erdem85/KopkeAPI` yazarsanız otomatık yapar

*örnek kullanım,*
```js
const KopkeAPI = require("kopke-api");
const api = new KopkeAPI(process.env["SECRETTOKEN"]);

const main = async () => {
    console.log(await api.simple())
};main();
```
