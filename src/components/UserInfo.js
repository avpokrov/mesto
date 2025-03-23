export class UserInfo {
    constructor(dataUserSelector) {
        this._name = document.querySelector(dataUserSelector.name);
        this._description = document.querySelector(dataUserSelector.description);
    }

    getUserInfo() {
        const dataUser = {
            name: this._name.textContent,
            description: this._description.textContent
        }
        return dataUser;
    }
    setUserInfo(dataUser) {
        this._name.textContent = dataUser.name;
        this._description.textContent = dataUser.description;
    }
}

// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzc5MGU0MzkyMWY0OWFlNTI4ZTQ4ZDUiLCJpYXQiOjE3MzU5ODY5MjcsImV4cCI6MTc2NzUyMjkyN30.TMrYxi-TLvtGG4x3SX4H1apnkDetESk6fiNSuyyxWLU