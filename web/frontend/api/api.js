import Api from ".";

export const createFormApi = async(payload) => {
    const response = await Api.post("createContactForm", payload);
    return response;
}