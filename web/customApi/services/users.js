import { MongoClient, ServerApiVersion } from "mongodb";
import { statusCode } from "../helper/helper.js";

export const contactForm = async (res) => {
  res.status(200).json(res);
  // const client = new MongoClient(
  //   "mongodb+srv://rajkumaritpath:k3y4DdEvxNUrBScw@cluster0.bkscd84.mongodb.net/shopify?retryWrites=true&w=majority",
  //   {
  //     serverApi: {
  //       version: ServerApiVersion.v1,
  //       strict: true,
  //       deprecationErrors: true,
  //     },
  //   }
  // );
  // await client.connect();
  // const col = client.db("shopify").collection("ContactDetails");
  // const result = await col.insertOne(res.body);

  // if (!result)
  //   return {
  //     statusCode: statusCode.SERVER_ERROR,
  //     message: "Something went wrong",
  //     success: 0,
  //   };

  // return {
  //   statusCode: statusCode.SUCCESS,
  //   message: "Contact From Submitted Successfully",
  //   success: 1,
  // };
  // client.close();
};
export const customForm = async (res) => {
  const client = new MongoClient(
    "mongodb+srv://rajkumaritpath:k3y4DdEvxNUrBScw@cluster0.bkscd84.mongodb.net/shopify?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  );
  await client.connect();
  const col = client.db("shopify").collection("CustomForms");
  const result = await col.insertOne(res.body);

  if (!result)
    return {
      statusCode: statusCode.SERVER_ERROR,
      message: "Something went wrong",
      success: 0,
    };

  return {
    statusCode: statusCode.SUCCESS,
    message: "Custom From Submitted Successfully",
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
