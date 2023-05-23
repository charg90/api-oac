import { Router } from "express";
import registrationRouter from "./RegistrationRoute";

const baseRouter = Router();

baseRouter.use("/registration", registrationRouter);

export default baseRouter;
