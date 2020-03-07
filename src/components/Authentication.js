class Authentication {
    constructor() {
        this.isAuthed = false;
    }

    login(callback) {
        this.isAuthed = true;
        callback()
    }


    logout(callback) {
        this.isAuthed = false;
        callback()
    }

    isAuthenticated() {
        return this.isAuthed;
    }
}

export default new Authentication()