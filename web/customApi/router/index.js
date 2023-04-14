import Router from "express";
import { responseMessage, statusCode } from "../helper/helper.js";
import { createContactForm, createFeedback} from "../controller/users.js";


const router = Router();

router.get("/checkServer", (req, res) => {
  return responseMessage({
   response:res,
   success: 0,
   statusCode: statusCode.SUCCESS,
   message: "Custom API Running",
 });
});

router.post("/createContactForm", createContactForm);
router.post("/feedback", createFeedback);


export default router;
