import { Request, Response } from 'express';

import SocialProvider from "../../networks";
import { sendToSocials, sendEmailNotification } from './utils'

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

    /* 
        I removed awaits here as in my opinion since this is an order burger route it is not necessary to send the user back information confirming these requests have been made,
        this of course would be a business decision. If I had complete control of this I would also move the social media code and email code to it's own microservice with these
        functions being requests to the microservices.
    */
    // Sends the notification that an burger has been ordered to the customers socials
    sendToSocials(social_networks);
    // Sends an email to the customer that their burger has been ordered
    sendEmailNotification();

    res.send('Order placed!');
}
