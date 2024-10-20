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