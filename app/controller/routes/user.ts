import {TestData} from "../../../no_touching/test_data";
import { Request, Response } from 'express';

 /**
 * Retrieve data about the logged in user
 * @param req
 * @param res
 */
export default function userRoute(req: Request, res: Response) {

    res.send(retrieveLoggedInUserData());
}

function retrieveLoggedInUserData() {
    const userData = TestData.initUser().getUser();

    // Blanked out customer password as this should be confidential information.
    // NOTE: Again this might be a business decision depending on the nature of this route but I would highly recommend this regardless.
    userData.password = 'Confidential information';

    return JSON.stringify(userData);
}