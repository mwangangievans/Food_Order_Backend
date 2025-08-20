import express, { request, response, NextFunction } from "express";


const router = express.Router();
router.get('/', (req: express.Request, res: express.Response, next: NextFunction) => {
    return res.json("Hello Mwangangi welcome to the admin panel!");
});

export { router as AdminRoute };