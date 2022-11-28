import Network from "./network";

export default class InstagramProvider extends Network  {
    constructor() {
        super();

        this.setAPIEndpoint('https://graph.instagram.com/v2.8/');
        this.setAccessToken('YnVyZ2VyaGFja2VyMTIz=');
        this.setAPIName('Instagram');
    }
}