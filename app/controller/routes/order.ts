import SocialProvider from "../networks";
import {TestData} from "../../../no_touching/test_data";
import Network from "../social/network";
import { Request, Response } from 'express';

/**
 * Post body
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

function sendToSocials(providers: Network[] | null) {
    if (providers) {
        providers.forEach((item) => {
            try {
                TestData.validateAPIKey(item);
            } catch (e) {
                console.error(e);
            }
        });
    }
}

async function sendEmailNotification() {
    await TestData.simulateSlowEmailRequest();
}

