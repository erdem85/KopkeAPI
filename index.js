const fetch = require("node-fetch");
module.exports = class {
    constructor(token){
        this.token = token
    };
    
    async simple(){
        let response;
        response = await fetch(`https://kopke.erdem.ovh/simple`, {headers: {authorization: this.token}}).then(e => e.json());
        if(response.error) return new Error("Unauthorized");
        return response.url;
    }
    async dark(){
        let response;
        response = await fetch(`https://kopke.erdem.ovh/dark`, {headers: {authorization: this.token}}).then(e => e.json());
        if(response.error) return new Error("Unauthorized");
        return response.url;
    }
    async siyasi(){
        let response;
        response = await fetch(`https://kopke.erdem.ovh/siyasi`, {headers: {authorization: this.token}}).then(e => e.json());
        if(response.error) return new Error("Unauthorized");
        return response.url;
    }
    async shitpost(){
        let response;
        response = await fetch(`https://kopke.erdem.ovh/shitpost`, {headers: {authorization: this.token}}).then(e => e.json());
        if(response.error) return new Error("Unauthorized");
        return response.url;
    }
}