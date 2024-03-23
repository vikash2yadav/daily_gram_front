import { callPostApi } from ".";

// Add email subscriber api function
export async function addEmailSubscriberApi(data) {
    try {
        const response = await callPostApi({ url: `email_subscriber/add`, body: data });
        return response;
    } catch (error) {
        throw error;
    }
}