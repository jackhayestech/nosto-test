import {TestData} from "../../../no_touching/test_data";
import { Request, Response } from 'express';

export default function userRoute(req: Request, res: Response) {
    res.send(retrieveLoggedInUserData());
}

function retrieveLoggedInUserData() {
    /**
     * Retrieve data about the logged in user
     * @param req
     * @param res
     */
    return JSON.stringify(TestData.initUser().getUser());
}