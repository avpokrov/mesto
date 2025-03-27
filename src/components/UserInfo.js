export class UserInfo {
    constructor(dataUserSelector) {
        this._name = document.querySelector(dataUserSelector.name);
        this._description = document.querySelector(dataUserSelector.description);
        this._avatar = document.querySelector(dataUserSelector.avatar);
    }

    setUserInfo(dataUser) {
        this._name.textContent = dataUser.name;
        this._description.textContent = dataUser.about;
        this._avatar.src = dataUser.avatar;
    }
}