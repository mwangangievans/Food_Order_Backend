import express, { request, response, NextFunction } from "express";
import { CreateVador, GetVador, GetVadorById } from "../controllers";


const router = express.Router();
router.post('/vador', CreateVador)
router.get('/vador', GetVador)
router.get('/vador/:id', GetVadorById);


export { router as AdminRoute };