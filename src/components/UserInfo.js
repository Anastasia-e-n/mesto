export class UserInfo {
    constructor({nameSelector, jobSelector, avatarSelector}) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        this._userData = {
            userName: this._name.textContent,
            userInfo: this._about.textContent,
        }
        return this._userData;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }

    setUserAvatar(url) {
        this._avatar.src = url.avatar;
    }
}