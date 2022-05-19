const { dbconnect } = require("../../../component/Database/dbconnect");
import {
  errorHandler,
  validHandler,
  responseHandler,
  userValidation,
} from "../../../common/util";
import User from "../../../component/Model/user";
import bcrypt from "bcrypt";
import validator from "validator";

export default async function createUser(req, res) {
  if (req.method !== "POST") {
    errorHandler("Invalid post type", res);
  }
  try {
    const { name, email, password, confirmPassword } = req.body;

    //Data validation
    validHandler(req.body);
    userValidation({ password, confirmPassword });
    // email validation
    if (!validator.isEmail(email)) {
      errorHandler("Enter your valid email.", res);
    }
    //Database connect
    await dbconnect();

    const hasPassword = await bcrypt.hash(password, 10);
    const user = new User({ ...req.body, password: hasPassword });

    const saveUser = await user.save();

    if (saveUser) {
      responseHandler(saveUser, res, 201);
    } else {
      errorHandler("something went wrong", res);
    }
  } catch (error) {
    if (error.code === 11000) {
      const message = `Duplicate ${Object.keys(error.keyValue)} Entered`;
      errorHandler(message, res);
    } else {
      errorHandler(error, res);
    }
  }
}
