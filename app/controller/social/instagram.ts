import Network from "./network";

export default class InstagramProvider extends Network  {
    constructor() {
        super();

        this.setAPIEndpoint('https://graph.instagram.com/v2.8/');
        this.setAccessToken('dG9tYXRvbGV0dHVjZTEyM3h4eXppbnN0YWdyYW0=');
        this.setAPIName('Instagram');
    }
}