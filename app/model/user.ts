import {TestData} from "../../no_touching/test_data";

export default class UserModel {
    protected username: string;
    protected password: string;
    protected email: string;
    protected firstName: string;
    protected lastName: string;

    constructor(username: string, password: any, email: string, firstName: string, lastName: string) {
        this.username = username;
        this.password = TestData.x(password);
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getUser() {
        return {
            username: this.username,
            password: this.password,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
        }
    }
}