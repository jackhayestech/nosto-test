import Network from "../../../social/network";
import {TestData} from "../../../../../no_touching/test_data";

// Sends post updates to social users social media accounts
export function sendToSocials(providers: Network[] | null) {
    /* 
     NOTE Ideally this try catch would be moved to a middleware wrapping all routes providing a centralized way to log errors
     I would also modify the test data to throw information detailing what provider this failed on, however I'm not supposed to touch that.
    */
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