import { MongoClient } from "mongodb";
import { statusCode } from "../helper/helper.js";

export const contactForm = async (res) => {
  const client = new MongoClient(
    "mongodb+srv://ronald:ronald@cluster0.fod8kmj.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  );
  await client.connect();
  const col = client.db("formBuilderModule").collection("ContactDetails");
  const result = await col.insertOne(res.body);

  if (!result)
    return {
      statusCode: statusCode.SERVER_ERROR,
      message: "Something went wrong",
      success: 0,
    };

  return {
    statusCode: statusCode.SUCCESS,
    message: "Contact From Submitted Successfully",
    success: 1,
  };
  client.close();
};

// export const feedbackForm = async (body) => {
//   const { email } = body;
//   const emailExists = await Feedback.findOne({ email });
//   if (emailExists)
//     return {
//       statusCode: statusCode.BADREQUEST,
//       message: "Email Id Already Exists",
//       success: 0,
//     };
//   const result = await Feedback.create(body);
//   if (!result)
//     return {
//       statusCode: statusCode.SERVER_ERROR,
//       message: "Something went wrong",
//       success: 0,
//     };
//   return {
//     statusCode: statusCode.SUCCESS,
//     message: "Feedback Submitted Successfully",
//     result,
//     success: 1,
//   };
// };
