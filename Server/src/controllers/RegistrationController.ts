import { Request, Response } from "express";
import { admin } from "./../firebase/firebase.config";

interface user {
  email: string;
  password: string;
}

const RegistrationController = async (user: user, res: Response) => {
  try {
    const userCrendtials = await admin.auth().createUser(user);
    res.status(200).json(userCrendtials);
  } catch (e) {
    console.log(e);
    res.status(500).json("Error creating user");
  }
};

export default RegistrationController;
