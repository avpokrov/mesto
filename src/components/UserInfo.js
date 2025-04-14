export class UserInfo {
    constructor(dataUserSelector) {
        this._name = document.querySelector(dataUserSelector.name);
        this._description = document.querySelector(dataUserSelector.description);
        this._avatar = document.querySelector(dataUserSelector.avatar);
    }

    setUserInfo({name, about, avatar, _id}) {
        if(name){
            this._name.textContent = name;
        }
        if(about) {
            this._description.textContent = about;
        }
        if(avatar){
            this._avatar.src = avatar;
        }
        this._id = _id;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._description.textContent
        }
    }

    getUserID() {
        return this._id;
    }
}