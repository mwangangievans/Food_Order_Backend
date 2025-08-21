import express, { request, response, NextFunction } from "express";
import { CreateVador, GetVadors, GetVadorById } from "../controllers";


const router = express.Router();
router.post('/vador', CreateVador)
router.get('/vador', GetVadors)
router.get('/vador/:id', GetVadorById);


export { router as AdminRoute };