import { postcss } from "autoprefixer";

export class Api {
    constructor(params) {
        this.params = params;
    }
    _checkData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getMyInfo() {
        return fetch(`${this.params.baseURL}/users/me`, {
            headers: this.params.headers,
            method: 'GET'
        })
        .then(res => this._checkData(res))
    }
    addCard(dataCard) {
        return fetch(`${this.params.baseURL}/cards`, {
            headers: this.params.headers,
            method: 'POST',
            body: JSON.stringify({
                name: dataCard.name,
                link: dataCard.link
            })
        })
        .then(res => this._checkData(res))
    }
    getCards() {
        return fetch(`${this.params.baseURL}/cards`, {
            method: "GET",
            headers: this.params.headers
        })
        .then(res => this._checkData(res))
    }
    editProfile(profileData){
        return fetch(`${this.params.baseURL}/users/me`,{
            method: "PATCH",
            headers: this.params.headers,
            body: JSON.stringify({
                name: profileData.name,
                about: profileData.about
            })            
        })
        .then((res) => this._checkData(res))
    }
    addCard(card){
        return fetch(`${this.params.baseURL}/cards`, {
            method: "POST",
            headers: this.params.headers,
            body: JSON.stringify({
                name: card.name,
                link: card.link
            })            
        })
        .then((res) => this._checkData(res))
    }

    delCard(cardId){
        return fetch(`${this.params.baseURL}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.params.headers,            
        })
        .then((res) => this._checkData(res))
    }
    addLikeCard(cardId){
        return fetch(`${this.params.baseURL}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this.params.headers,            
        })
        .then((res) => this._checkData(res))
    }
    delLikeCard(cardId){
        return fetch(`${this.params.baseURL}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this.params.headers,            
        })
        .then((res) => this._checkData(res))
    }
    updateAvatar(urlAvatar) {
        return fetch(`${this.params.baseURL}/users/me/avatar`, {
            method: "PATCH",
            headers: this.params.headers,
            body: JSON.stringify({
                avatar: urlAvatar.link
            }) 
        })
        .then((res) =>this._checkData(res))
    } 
}