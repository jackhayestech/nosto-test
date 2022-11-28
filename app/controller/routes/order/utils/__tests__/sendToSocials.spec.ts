import { sendToSocials } from '../sendToSocials'
import {TestData} from "../../../../../../no_touching/test_data";

describe('Tests for the send to socials function',() => {
    it('Should call the validate api key the required number of times.', () => {
        const mock = jest.fn()
        TestData.validateAPIKey = mock;

        const providers = [1,2];

        sendToSocials(providers as any)

        expect(mock).toHaveBeenCalledTimes(2);
    })

    it('Should call the validate api key the required number of times.', () => {
        const error = new Error('Error')
        const mock = jest.fn(() => {throw error})
        TestData.validateAPIKey = mock;
        const spy = jest.spyOn(console, 'error')

        const providers = [1,2];

        sendToSocials(providers as any)

        expect(spy).toHaveBeenCalledWith(error);
    })
})