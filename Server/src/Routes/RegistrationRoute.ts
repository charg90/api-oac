import { Request, Response, Router } from "express";
import RegistrationController from "../controllers/RegistrationController";
const registrationRouter = Router();

registrationRouter.post("/", (req: Request, res: Response) => {
  const user = req.body;
  const registrationUser = RegistrationController(user, res);
  return registrationUser;
});

export default registrationRouter;
