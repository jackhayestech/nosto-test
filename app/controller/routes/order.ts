import { Request, Response } from 'express';

import SocialProvider from "../networks";
import Network from "../social/network";
import {TestData} from "../../../no_touching/test_data";

/**
 * Route handling a user ordering a burger
 * burger_name
 * burger_addons
 * user_id
 * @param req
 * @param res
 */
export default async function orderRoute(req: Request, res: Response) {
    const social_networks = new SocialProvider().getProviders();

    await sendToSocials(social_networks);
    await sendEmailNotification();

    res.send('Order placed!');
}

// Sends post updates to social users social media accounts
function sendToSocials(providers: Network[] | null) {
    // Ideally this try catch would be moved to a middleware wrapping all routes providing a centralized way to log errors 
    try {
        if (providers) {
            providers.forEach((item) => {
                TestData.validateAPIKey(item);
            });
        }
    } catch (e) {
        console.error(e);
    }
}

// Sends email mail to user confirming order
async function sendEmailNotification() {
    await TestData.simulateSlowEmailRequest();
}

