import Network from "../../../social/network";
import {TestData} from "../../../../../no_touching/test_data";

// Sends post updates to social users social media accounts
export function sendToSocials(providers: Network[] | null) {
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