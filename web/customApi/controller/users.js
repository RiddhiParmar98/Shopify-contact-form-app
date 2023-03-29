import { contactForm} from "../services/users.js";
import { responseMessage, statusCode } from "../helper/helper.js";

export const createContactForm = async (request, response) => {
  try {
    const result = await contactForm(request.body);
    if (!result)
      return responseMessage({
        success: 0,
        response,
        statusCode: statusCode.BADREQUEST,
        message: "Bad Request123",
      });
    responseMessage({ response, ...result });
  } catch (error) {
    console.log(error, "error");
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
