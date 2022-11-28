import {TestData} from "../../../../../no_touching/test_data";

// Sends email mail to user confirming order
export async function sendEmailNotification() {
    await TestData.simulateSlowEmailRequest();
}
