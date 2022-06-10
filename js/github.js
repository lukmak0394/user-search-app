class Github {

    constructor() {
        this.client_id = '9621b9f70a31b3600321';
        this.client_secret = 'e2aafb7f272105dacd58489c8457f12df0063229 ';
    }

    async getUsers(user) {

        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await response.json();

        return {
            profile
        }

    }
}