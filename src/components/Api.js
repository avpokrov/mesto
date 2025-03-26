export class Api {
    constructor(params) {
        this.params = params;
    }
    getMyInfo() {
        return fetch(`${this.params.baseURL}/users/me`, {
            headers: this.params.headers,
            method: 'GET'
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
            .catch((err) => {
                console.log(err);
            })
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
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                console.log(res);
                return Promise.reject(`Ошибка:`)

            })
    }
}