import Network from "./network";

export default class TwitterProvider extends Network {
    constructor() {
        super();

        this.setAPIEndpoint('https://graph.twitter.com/v2.8/');
        this.setAccessToken('dG9tYXRvbGV0dHVjZTEyM3h4eXp0d2l0dGVy');
        this.setAPIName('Twitter');
    }
}