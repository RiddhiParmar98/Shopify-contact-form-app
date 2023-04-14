import { contactForm, customForm } from "../services/users.js";
import { responseMessage, statusCode } from "../helper/helper.js";

export const createContactForm = async (request, response) => {
  res.status(200).json(request);
  try {
    const result = await contactForm(request);
    if (!result)
      return responseMessage({
        success: 0,
        response,
        statusCode: statusCode.BADREQUEST,
        message: "Bad Request123",
      });
    responseMessage({ response, ...result });
  } catch (error) {
    return responseMessage({
      response,
      statusCode: statusCode.BADREQUEST,
      message: "Bad Request",
      success: 0,
    });
  }
};
export const createCustomForm = async (request, response) => {
  try {
    const result = await customForm(request);
    if (!result)
      return responseMessage({
        success: 0,
        response,
        statusCode: statusCode.BADREQUEST,
        message: "Bad Request123",
      });
    responseMessage({ response, ...result });
  } catch (error) {
    return responseMessage({
      response,
      statusCode: statusCode.BADREQUEST,
      message: "Bad Request",
      success: 0,
    });
  }
};
// export const createFeedback = async (request, response) => {
//   try {
//     const result = await feedbackForm(request.body);
//     if (!result)
//       return responseMessage({
//         success: 0,
//         response,
//         statusCode: statusCode.BADREQUEST,
//         message: "Bad Request",
//       });
//     responseMessage({ response, ...result });
//   } catch (error) {
//     return responseMessage({
//       response,
//       statusCode: statusCode.BADREQUEST,
//       message: "Bad Request",
//       error: error,
//       success: 0,
//     });
//   }
// };
