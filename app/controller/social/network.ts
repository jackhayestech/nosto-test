export default class Network {
    protected api_endpoint : string | null = null;
    protected access_token : string | null = null;
    protected api_name: string | null = null;

    init() {
        // Connect to endpoint and pass to application config
        this.connect();

        return this;
    }

    setAPIName(name : string)         { this.api_name = name; }
    getAPIName()                      { return this.api_name; }
    setAPIEndpoint(endpoint : string) { this.api_endpoint = endpoint; }
    setAccessToken(username : string) { this.access_token = username; }
    getAPIKey()                       { return this.access_token; }

    connect() {
        console.log('Connecting to...' + this.api_endpoint + '?key=' + this.access_token);
    }

}