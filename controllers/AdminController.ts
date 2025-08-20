import { Request, Response, NextFunction } from "express";
import { CreateVadorInput } from "../dto";


export const CreateVador = async (req: Request, res: Response, next: NextFunction) => {

    const { name, email, password, address, foodtype, phone, ownerName, pincode } = <CreateVadorInput>req.body;
    return res.json({
        name,
        email,
        password,
        address,
        foodtype,
        phone,
        ownerName,
        pincode
    });
    // Here you would typically save the vendor to the database

}
export const GetVador = async (req: Request, res: Response, next: NextFunction) => {

}

export const GetVadorById = async (req: Request, res: Response, next: NextFunction) => {

} 