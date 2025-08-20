import express, { request, response, NextFunction } from "express";
import { CreateVador } from "../controllers";


const router = express.Router();

router.post('/', CreateVador)
// router.get('/', (req: express.Request, res: express.Response, next: NextFunction) => {
//     return res.json("Hello Mwangangi welcome to vador section!");
// });

export { router as VandorRoute };