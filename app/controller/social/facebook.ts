import Network from "./network";

export default class FacebookProvider extends Network {
    constructor() {
        super();

        this.setAPIEndpoint('https://graph.facebook.com/v2.8/');
        this.setAccessToken('dG9tYXRvbGV0dHVjZTEyM3h4eXpmYWNlYm9vaw==');
        this.setAPIName('Facebook');
    }
}